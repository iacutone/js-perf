# JavaScript Performance Tester

### Why?
===
In order to see how much performance is lost with a plethora of jQuery events.
### Tests
===
* (with Chrome Version 34.0.1847.131)
* var count changes on app.js line 2
* time in milliseconds

```js
var count = 1;
```

```
Time for DOM method read: 1 
Time for property read: 1 
Time for DOM updating the DOM: 1  
```

```js
var count = 10;
```

```
Time for DOM method read: 1 
Time for property read: 1 
Time for DOM updating the DOM: 4 
```

```js
var count = 100;
```

```
Time for DOM method read: 2 
Time for property read: 2
Time for DOM updating the DOM: 16
```

```js
var count = 1000;
```

```
Time for DOM method read: 7 
Time for property read: 17
Time for DOM updating the DOM: 129
```

```js
var count = 10000;
```

```
Time for DOM method read: 43 
Time for property read: 77
Time for DOM updating the DOM: 1362
```

Code crafted from [Secrets of the JavaScript Ninja](http://www.amazon.com/Secrets-JavaScript-Ninja-John-Resig/dp/193398869X).