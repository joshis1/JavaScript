# JavaScript
##  Install nodemon globally
```
  npm i nodemon@1.18.5 -g
```

##  Test nodemon
```
nodemon -v 
```


## Git Tutorial and documentation.
```
https://git-scm.com/
https://git-scm.com/book/en/v2
```

### Check bash option while installing git on the Windows.
``` git version 
git version 2.30.2.windows.1
```

* Initialize git
* Add files to your project 
* Untracked files
* Unstaged Changes
* Staged Changes.
* Commit

## With git bash
``` 
ls -a -l ~/.ssh 
```

* id_rsa  --> secret file
* id_rsa.pub --> public file

## create ssh key pairs.
``` 
ssh-keygen -t rsa -b 4096 -C "shreyasjoshi15@gmail.com" 
```

## check whether the ssh agent is working or not.
```
eval "$(ssh-agent -s)" 
```

## Verify and authenticate your ssh rsa id
``` 
ssh-add -K ~/.ssh.id_rsa 
```

## Check your connection with github
``` 
ssh -T git@github.com 
```

##  Pushing the code to the master branch.
``` 
git push -u origin master 
```

# Protocols to follow - 
* Always push the code using WSL - Ubuntu rather than gitbash or Power shell.

