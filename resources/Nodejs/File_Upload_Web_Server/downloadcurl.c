#include <openssl/err.h>
#include <openssl/ssl.h>
#include <curl/curl.h>
#include <stdio.h>

size_t writefunction(void *ptr, size_t size, size_t nmemb, void *stream)
{
  printf("called.. writeFunction\r\n");
  fwrite(ptr, size, nmemb, (FILE *)stream);
  return (nmemb*size);
}

int main(void)
{
  CURL *ch;
  CURLcode rv;
  char caPath[128];
 char errbuf[CURL_ERROR_SIZE];
 
  rv = curl_global_init(CURL_GLOBAL_ALL);
  ch = curl_easy_init();


  rv = curl_easy_setopt(ch, CURLOPT_URL, "https://10.16.1.96:9000/aos.conf");
    /* provide a buffer to store errors in */
  curl_easy_setopt(ch, CURLOPT_ERRORBUFFER, errbuf);

    /* set the error buffer as empty before performing a request */
  errbuf[0] = 0;

  rv = curl_easy_setopt(ch, CURLOPT_WRITEFUNCTION, *writefunction);
  rv = curl_easy_setopt(ch, CURLOPT_WRITEDATA, stdout);
  rv = curl_easy_setopt(ch, CURLOPT_SSL_VERIFYPEER, 1L);
 
  printf("set Up CA Path..\r\n");
  memset(caPath,'0',sizeof(caPath));
  strcpy(caPath,"/home/sjoshi/SSL_Server");
  rv = curl_easy_setopt(ch, CURLOPT_CAPATH,caPath);

  // fix me -- Change this to the path you need -- copy the certificate from Server.
  curl_easy_setopt(ch, CURLOPT_CAINFO, "/home/sjoshi/SSL_Server/cert.pem");
 
  rv = curl_easy_perform(ch);
  printf("curl easy perform done..\r\n");

  if(rv == CURLE_OK)
    printf("*** transfer succeeded ***\n");
  else
  {
     printf("*** transfer failed..****\n");
      /* if the request did not complete correctly, show the error
  information. if no detailed error information was written to errbuf
  show the more generic information from curl_easy_strerror instead.
  */
    size_t len = strlen(errbuf);
    fprintf(stderr, "\nlibcurl: (%d) ", rv);
    if(len)
      fprintf(stderr, "%s%s", errbuf,
              ((errbuf[len - 1] != '\n') ? "\n" : ""));
    else
      fprintf(stderr, "%s\n", curl_easy_strerror(rv));
  }
  
  return 0;
}
