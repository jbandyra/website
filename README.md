# Jay-ban.pl


#### How to create a project?

All projects can be found in _projects folder. To create a project add new .md file to _projects folder
##### Important! Name of the file will be used to generate url path to the project e.g. **beautiful-desolation**.md -> jay-ban.pl/projects/**beautiful-desolation**


#### How to edit a project?

```
---
title_en: *Title of the project in English*
title_pl: *Title of the project in Polish*
description_en: *description in English*
description_pl: *description in Polish*
image: name of the image, e.g. desolation.jpeg (image will be displayed on Home page)
large_image: name of the  large image, e.g. desolation.jpeg (image will be displayed on Project page)
url: url to the project

date: date in format DD-MM-YYYY (projects are sorted on home page starting from last)
---
```

**Images should be put inside `public/projects` folder**

#### How to remove a project?
simply remove .md file from the repository

