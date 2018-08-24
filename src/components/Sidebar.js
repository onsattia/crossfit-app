// import React, { Component } from 'react'
// import { withStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import Hidden from '@material-ui/core/Hidden';
// import MenuIcon from '@material-ui/icons/Menu';

// const drawerWidth = 240;

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     height: 440,
//     zIndex: 1,
//     overflow: 'hidden',
//     position: 'relative',
//     display: 'flex',
//     width: '100%',
//   },
//   appBar: {
//     position: 'absolute',
//     marginLeft: drawerWidth,
//     [theme.breakpoints.up('md')]: {
//       width: `calc(100% - ${drawerWidth}px)`,
//     },
//   },
//   navIconHide: {
//     [theme.breakpoints.up('md')]: {
//       display: 'none',
//     },
//   },
//   toolbar: theme.mixins.toolbar,
//   drawerPaper: {
//     width: drawerWidth,
//     [theme.breakpoints.up('md')]: {
//       position: 'relative',
//     },
//   },
//   content: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.default,
//     padding: theme.spacing.unit * 3,
//   },
// });

// class Sidebar extends Component {
//     render() {
//         state = {
//             mobileOpen: false
//         }
    
//         handleDrawerToggle = () => {
//             this.setState(state => ({ mobileOpen: !state.mobileOpen }));
//         }

//         const { classes, children } = this.props;
//         const { mobileOpen } = this.state
//         const drawer = (
//         <div>
//             <div className={classes.toolbar} />
//             Hello
//             <Divider />
//         </div>
//         );
//         <div className={classes.root}>
//         <AppBar className={classes.appBar}>
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="Open drawer"
//               onClick={this.handleDrawerToggle}
//               className={classes.navIconHide}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="title" color="inherit" noWrap>
//               Responsive drawer
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Hidden mdUp>
//           <Drawer
//             variant="temporary"
//              open={mobileOpen}
//             onClose={this.handleDrawerToggle}
//             classes={{
//               paper: classes.drawerPaper,
//             }}
//             ModalProps={{
//               keepMounted: true, // Better open performance on mobile.
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </Hidden>
//         <Hidden smDown implementation="css">
//           <Drawer
//             variant="permanent"
//             open
//             classes={{
//               paper: classes.drawerPaper,
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </Hidden>
//         <main className={classes.content}>
//           <div className={classes.toolbar} />
//           {children}
//         </main>
//       </div>
//     }
// }
// export default  withStyles(styles, Sidebar);