image-grok
==========

Super basic bookmarklet to pull image URLs out of a page. Looks similar to a pinteresting web application
that you might be familiar with except this bookmarklet actually traverses iframes.

Create a bookmark with the following address with your JS file substituted:

    javascript: (function () {var jsCode = document.createElement('script'); jsCode.setAttribute('src', 'https://PATH/TO/YOUR/JS'); document.body.appendChild(jsCode);}());

For simple file hosting filepicker.io has been a great resource. 