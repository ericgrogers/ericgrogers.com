#Portfolio Deployment Plan

##1.Setup A Github repository for development

####a. Login to Github.com
  + Create a new repository named "portfolio" and initialize it with a readme file.
  + Clone the repository to the desktop.

####b. Add site files to the local repository and push them to Github
  + $ git add .
  + $ git commit -am "Commit Message"

##2. Set up the server.

###1. Using DigitalOcean hosting, create a new Virtual Private Server using Ubuntu 12.04.5 x32.

###2. SSH Into the Server
  +	ssh root@ServerIPAddress
  +	Enter password

####3.	Create Non-Root User
  +	adduser Username

####4.	Add the user to the sudo group
  +	adduser Username sudo

####5. End SSH Session
  +	exit

####6.	Login as Non-Root User
  +	ssh Username@ServerIPAddress
  +	Enter password

####7.	Update Package System
+	sudo apt-get update
  +	Enter password

####8.	Upgrade Package System
  +	sudo apt-get upgrade

####9.	Update Packages for Newly Installed Version
  +	sudo apt-get update

####10.	Update System level Packages
  +	sudo aptitude update
  +	sudo aptitude safe-upgrade
  +	sudo reboot

##3.	Install Packages

###1.	Install Git
  +	sudo apt-get install git-core

####2.	Configure Git
  +	git config --global user.name “NAME”
  +	git config --global user.email Your@Email.com

####3.	Confirm Settings
  +	git config --list

####4.	Create SSH Keys for Github Access
  +	ssh-keygen -t rsa -C ”YourEmail@example.com”
    +	This will ask if you want to customize the name, you don’t. Just press enter.
  +	Enter a passphrase
  +	Re-enter the passphrase

####5.	Put the RSA key on file with github.com so this server is treated as a trusted machine.
  +	less ~/.ssh/id_rsa.pub
    +	Copy ALL of the contents of this file to your clipboard.
  +	Add new SSH Key to your Github account under the Account Settings.
    +	Click the Add Key button
    +	Enter a title defining the server
    +	Paste the RSA file’s contents into text area marked “Key”
    +	Click Add Key

###1.	Install Apache 2
  +	sudo apt-get install apache2

####2.	Configure ServerName
  +	Restart Server
    +	sudo service apache2 restart
  +	Displays Failed to Restart Message
    +	apache2: Could not reliably determine the server's fully qualified domain name, using 127.0.0.1 for ServerName
  +	Configure ServerName
    +	sudo pico /etc/apache2/conf.d/security
      +	Add
        +	ServerName localhost
    +	sudo service apache2 restart
    +	Apache should report a successful restart

####3.	Restrict Access
  +	sudo pico /etc/apache2/conf.d/security
    +	Uncomment <Directory />
    +	Add
      +	Options FollowSymLinks
    +	sudo service apache2 restart

####4.	Change Permissions to Allow Access
  +	sudo chown -R UserName /var/www

##3. Upload files to server.

####1. Close server connection.
  + exit

####2. Change to directory where the portfolio directory is located.
  + cd /Sites/

####3. tar and gzip the portfolio directory
  + tar -cvzf portfolio.tar.gz portfolio

####4. Secure Copy the files to the server.
  + scp portfolio.tar.gz Username@serverIPaddress:~/
    + enter password

####5. SSH into Server
  + ssh Username@seriverIPaddress

####6. Move the file to the public www directory.
  + mv portfolio.tar.gz /var/www/

####7. Extract files
  + cd /var/www/
    + tar -xzpvf portfolio.tar.gz
    + verify that the folder exists.
      + ls

####8. Move portfolio contents to the www directory.
  + cd portfolio
    + mv * ..

####9. Verify the Contents and delete the portfolio directory.
  + cd ..
    + ls -l
    + rm -f portfolio

####10. Delete the compressed file.
  + rm -f portfolio.tar.gz

## The Site is now LIVE
=======

# Staging / Production Promotion Deployment Plan

## To deploy to the Staging / Production Servers Strict adherence to the following process is required. 

####1.	Merge Dev Branch into Master
Upon completion of fully testing a new feature in your local dev environment merge the newFeatureName Branch back into master. To do this successfully you will need to first pull the remote master branch, ensuring your local master branch is up to date.

####1.	$ git checkout master 
  + Switches to the local master branch
  + $ git pull github master 
    +	github is the name of the remote repo we will use to differentiate between our other remote deployment servers

####2. Resolve any conflicts 
  + Visit each conflicted file and resolve any conflicts. This will require a saving.
  + Once conflicts are resolved and saved, they need committed and another pull of remote is required.
    + $ git add -A
    + $ git commit -am ‘detailed commit message.’
    + $ git pull github master
      + $ git merge newFeatureName 
      + Resolve any conflicts (see 1.2.2)

####4.	Test 
  +	If any tests fail, the master branch is flawed, and not ready to be pushed to remote. Resolve the issues prior to pushing to the remote in the next step.

####5.	$ git push github master 

##2.	Tag Release
  + $ git tag -a vX.X.X -m ‘Release Code or Feature Name ’ 
    +	X.X.X should be an incriminated according to the Versions Numbering Development Policy.
    +	$ git push github --tags 
      +	Tags are not automatically pushed in a normal push, they must be manually pushed to the remote repo.

##3.	Promote to Staging

### Promote the tested code to the staging environment to ensure stability within the overall system. 
  +	$ git push Staging master

####4.	Test Again!
  + If anything fails, try to replicate the issue within the Local Dev Environment. Should the issue not be replicable there, identify why it isn’t working in Staging and attempt to solve the problem.

####5.	Once testing is complete, push to Production Server

####6.	Tag Release
  +	$ git tag -a vX.X.X -m ‘Release Code or Feature Name ’ 
    +	X.X.X should be an incriminated according to the Versions Numbering Development Policy.
  +	$ git push github --tags 
    +	Tags are not automatically pushed in a normal push, they must be manually pushed to the remote repo.

####7.	$ git push Production master

