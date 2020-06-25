### django form test with fetch api
---
branches:
  - master
  - pages

base (master):
  - `mkdir \<projectname\>`
  - `cd \<projectname\>`
  - create virtualenv: `python3 -m venv .venv` -- '.venv' is my person preference
  - start  virtualenv: `source .venv/bin/activate` - note command prompt prefix '(.venv)'
  - install django: `pip install django`
  - git: `git init`, create .gitignore (gitignore.io), create README.md, create new GH proj
  - create django proj: `django-admin startproject \<name\> .` -- ** DO NOT FORGET THE '.' **

pages:
  - create pages app: `django-admin startapp \<name>\>` -- 'pages' app is for rendering static pages, i.e. home, about, etc. other apps for non-static pages will be created later.




Directory tree (unused files/dirs excluded)  
djangoForm01/   (PROJECT)  
├── db.sqlite3  
├── form    (APP)  
│   ├── settings.py  
│   ├── urls.py  
│   └── wsgi.py  
├── manage.py  
├── pages   (APP)  
│   ├── admin.py  
│   ├── apps.py  
│   ├── models.py  
│   ├── urls.py  
│   └── views.py  
├── README.md  
├── req.txt  
└── templates  
    ├── base.html  
    └── pages  
        ├── about.html  
        └── index.html  


