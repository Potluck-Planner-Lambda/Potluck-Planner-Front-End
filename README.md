# potluck-planner git flow
A suggested git flow


**There are two key branches in use**
>`master` \
`playground`


**First steps**
>`git checkout playground`\
`git pull origin playground`


**Checkout a new branch for yourself**
>`git checkout -b name-feature-date`



**Push your work to your branch**
On your branch, you did some work...
>`git add .` \
`git commit -m` \
`git push origin your-branch-name`

now you want to pull into playground. Good.

To do that, you can checkout playground, and get the most updated version like this:
>`git checkout playground`\
`git pull origin playground`

Pulling playground into playground _should_ go really smooth. All it's doing is updating your version of playground with the newest version of playground. When you do it, you should see a message at the top of the list of files that says _Fast forward_.

Up to now, we've simply updated our local playground with the updated playground. The above process should be done, **at least**, once a day.


**Pull your branch into local playground**
Now, you are on the playground branch locally and your playground branch is all up to date. Do this:
>`git pull origin your-branch-name`

Ideally, you'll see another _Fast forward_^2^ and you can proceed with committing. 

Alternatively, you may run into _merge conflicts_. That's ok, it happens!


**In the event of a merge conflict**
Anytime two people work on the same file during the same time, the potential for a conflict exists. 

BUT, VSCode makes it really easy to see and handle such conflicts. 

Click on the github icon in VS, review the merge changes (these are the first in the first section) one by one and then decide what the best course of action will be.

Remember, save each file after you resolve the conflict!

Remember, commit each file after you resolve the conflict!


**Push your newly updated playground**
Now, you have an updated playground. After handling any conflicts, don't forget to review the app to make sure nothing unexpected happened. 

IF the app looks clean, the changes are good, and your ready to deploy the updated playground server, do this:
>`git push origin playground`\
`git checkout -b new-branch-name`


**Pulling into master**
At the end of the day, someone pulls the running playground into master


