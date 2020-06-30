## Installations for deployment

For running locally, follow below steps:

1) For setup first time on locall: git clone https://github.com/tushar21/samdiv.git 

2) run `npm install`

3) run `npm start`. site will be running on url : http://localhost:3000   



## For updating any content we have used json apis where we can update any content.

So there is no need to update files for changing content.

For other changes except content, we need to change the files. and follow the below steps.

## Steps for changing files

1) after changes done, run command `npm run build`  OR npm run-script build in  LOCAL ONLY **

2) `git add .`

3) `git commit -m "YOUR COMMIT MESSAGE"`

4) `git push origin master`

5) ssh to server using putty  

6) After login, in samdiv folder run command : `git pull origin master`

After this you changes will be reflected automatically !!!

