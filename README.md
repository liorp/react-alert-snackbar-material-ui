# react-alert-template-snackbar-material-ui

## Installation

```
npm install react-alert-template-snackbar-material-ui
```

## Demo

[![Edit react-alert-template-snackbar-material-ui example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-alert-template-material-ui-snackbar-tm0e7?fontsize=14)

## How to Use

### Simple alert

```javascript
alert.show("Oh look, an alert!");
```

### Alert with title

```javascript
alert.show("This is an alert with title!", {
  title: "Random Alert Title",
});
```

### Change copy on close button

```javascript
alert.show("This is an alert with title!", {
  title: "Random Alert Title",
  closeCopy: "Cancel",
});
```

### Alert with extra actions

```javascript
alert.show("This is an alert with extra actions!", {
  title: "Alert with extra actions!",
  actions: [
    {
      copy: "Do something",
      onClick: () => setAction("Actioned!"),
    },
  ],
});
```
