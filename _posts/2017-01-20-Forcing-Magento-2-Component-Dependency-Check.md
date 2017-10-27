---
layout: post
title: Forcing Magento 2 Component Dependency Check to continue.
date: 2016-01-20
tags: [unix,cron,magento]
---

When attempting an update/install of a Magneto 2 extension, I came across the error `We found conflicting component dependencies`. No additional information was given. This was resolved by renaming the file `<your Magento install dir>/var/.setup_cronjob_status` to `<your Magento install dir>/var/.setup_cronjob_status.bak`.

Additional information can be found in the [Magento DevDocs](http://devdocs.magento.com/guides/v2.0/comp-mgr/trouble/cman/component-depend.html "Magento DevDocs").
