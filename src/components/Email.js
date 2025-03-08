import * as React from 'react';
import { Html, Button } from "@react-email/components";

export function Email(props) {
  const { sender, message, url } = props;

  return (
    <Html lang="en">
        <head>
            <title>Simple Email</title>
        </head>
        <body>
            <h1>Hello, {sender}</h1>
            <p>{message}</p>
            <Button href={url}>Visit Our Website</Button> 
        </body>

      
    </Html>
  );
}
