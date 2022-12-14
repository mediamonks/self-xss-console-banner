# self-xss console banner

This module will log a self-xss banner to warn users about the [self-xss security risk](https://en.wikipedia.org/wiki/Self-XSS).
This banner should be used for projects that have data behind a login.

## Installation
```
npm i @mediamonks/self-xss-console-banner
```

## Implementation
Displaying the default warning:

```
import xssBanner from '@mediamonks/self-xss-console-banner';

xssBanner();
```

Displaying a custom warning:
```
import xssBanner from '@mediamonks/self-xss-console-banner';

xssBanner(false, 'Stop!', 'Do not paste anything here, close this window!', 'Please contact us via security@example.com');
```

## SSR (Server Side Rendering)
When using SSR make sure that this module is not included. It's possible to use a dynamic import to execute it only
on client side.

```
const selfXssBanner = (await import('@mediamonks/self-xss-console-banner')).default;

selfXssBanner();
```

## Default warning
![default warning](./self-xss-console-banner.webp?raw=true "Self-xss warning example")

## Contributing

```
git clone git@github.com:mediamonks/self-xss-console-banner.git
```

After cloning run `npm i; npm run postinstall`
