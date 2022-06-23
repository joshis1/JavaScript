# Create a virtual env.
```
sudo  apt install python3.8-venv
python3 -m venv redis-ipc
```

## Active the virtual env
```
 source redis-ipc/bin/activate
```

## redis Library install

```
pip3 install redis
```

## Store the requirements
pip3 freeze > requirements.txt


## Reference 
* https://koalatea.io/python-redis-pubsub/
