import React from 'react';

const Index = () =>
  <html>
    <head>
      <title>{'NodeGit'}</title>
      <link
        href='data:,'
        rel='icon'
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
