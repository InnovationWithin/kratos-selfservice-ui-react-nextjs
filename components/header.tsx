import Head from 'next/head'
import React, { useState } from 'react';

export function Header() {
  return (
    <Head>
        <title>Innovation Within</title>
        <meta name="description" content="Innovation Within" />
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/loadingio/loading.css@v2.0.0/dist/loading.min.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@radix-ui/colors@latest/gray.css" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
    </Head>
  );
}
