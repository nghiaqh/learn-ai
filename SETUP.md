# SETUP GUIDE

## MongoDB

1. Import public key:

  ```bash
  sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
  ```

2. Create file list:

  ```bash
  echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
  ```

3. Refresh cache:

  ```bash
  sudo apt-get update
  ```

4. Install MongoDB:

  ```bash
  sudo apt-get install -y mongodb-org
  ```

Read more: [MongoDB install guide for Ubuntu](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)