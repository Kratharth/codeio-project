export default theme => ({
  topbar: {
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    right: 'auto',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  topbarShift: {
    marginLeft: '271px',
    width: 'calc(-271px + 100vw)' // top bar side shift on opening and closing the side-nav
  },
  drawerPaper: {
    zIndex: 1200,
    width: '271px' //actual sidebar width
  },
  sidebar: {
    width: '270px' // width for sidebar head and sidebar icon. as you increase this the header and icon will disappear.
  },
  content: {
    marginTop: '64px', // width between the header and body content
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  contentShift: {
    marginLeft: '270px' // by how much the body content shifts on opening the side-nav
  }
});
