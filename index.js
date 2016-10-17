import React from 'react';

const Index = () =>
  <html>
    <head>
      <title>{'NodeGit'}</title>
      <link
        href='data:,'
        rel='icon'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Roboto:300'
        rel='stylesheet'
      />
    </head>
    <body>
      <div id='content'/>
      <script
        src='index.js'
      />
    </body>
  </html>;

Index.displayName = 'Index';

export default Index;
