webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/layouts/navbar/navbar.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<nav class=\\\"navbar navbar-dark navbar-expand-md jh-navbar\\\"> <div class=\\\"jh-logo-container float-left\\\"> <a class=\\\"jh-navbar-toggler d-lg-none float-right\\\" href=\\\"javascript:void(0);\\\" data-toggle=\\\"collapse\\\" data-target=\\\"#navbarResponsive\\\" aria-controls=\\\"navbarResponsive\\\" aria-expanded=\\\"false\\\" aria-label=\\\"Toggle navigation\\\" (click)=\\\"toggleNavbar()\\\"> <i class=\\\"fa fa-bars\\\"></i> </a> <a class=\\\"navbar-brand logo float-left\\\" routerLink=\\\"/\\\" (click)=\\\"collapseNavbar()\\\"> <span class=\\\"logo-img\\\"></span> <span class=\\\"navbar-title\\\">EnvAng5</span> <span class=\\\"navbar-version\\\">{{version}}</span> </a> </div> <div class=\\\"navbar-collapse collapse\\\" id=\\\"navbarResponsive\\\" [ngbCollapse]=\\\"isNavbarCollapsed\\\" [ngSwitch]=\\\"isAuthenticated()\\\"> <ul class=\\\"navbar-nav ml-auto\\\"> <li class=\\\"nav-item\\\" routerLinkActive=\\\"active\\\" [routerLinkActiveOptions]=\\\"{exact: true}\\\"> <a class=\\\"nav-link\\\" routerLink=\\\"/\\\" (click)=\\\"collapseNavbar()\\\"> <span> <i class=\\\"fa fa-home\\\" aria-hidden=\\\"true\\\"></i> <span>Homee</span> </span> </a> </li> <li ngbDropdown class=\\\"nav-item dropdown pointer\\\" routerLinkActive=\\\"active\\\" [routerLinkActiveOptions]=\\\"{exact: true}\\\"> <a class=\\\"nav-link dropdown-toggle\\\" ngbDropdownToggle href=\\\"javascript:void(0);\\\" id=\\\"dashboard-menu\\\"> <span> <i class=\\\"fa fa-area-chart\\\" aria-hidden=\\\"true\\\"></i> <span>Dashboard</span> <b class=\\\"caret\\\"></b> </span> </a> <ul class=\\\"dropdown-menu\\\" ngbDropdownMenu> <li uiSrefActive=\\\"active\\\"> <a class=\\\"dropdown-item\\\" routerLink=\\\"barchart\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <i class=\\\"fa fa-fw fa-bar-chart\\\" aria-hidden=\\\"true\\\"></i> <span>BarChart</span> </a> </li> <li uiSrefActive=\\\"active\\\"> <a class=\\\"dropdown-item\\\" routerLink=\\\"doughnutchart\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <i class=\\\"fa fa-fw fa-circle-o-notch\\\" aria-hidden=\\\"true\\\"></i> <span>DoughnutChart</span> </a> </li> <li uiSrefActive=\\\"active\\\"> <a class=\\\"dropdown-item\\\" routerLink=\\\"linechart\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <i class=\\\"fa fa-fw fa-line-chart\\\" aria-hidden=\\\"true\\\"></i> <span>LineChart</span> </a> </li> <li uiSrefActive=\\\"active\\\"> <a class=\\\"dropdown-item\\\" routerLink=\\\"piechart\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <i class=\\\"fa fa-fw fa-pie-chart\\\" aria-hidden=\\\"true\\\"></i> <span>PieChart</span> </a> </li> <li uiSrefActive=\\\"active\\\"> <a class=\\\"dropdown-item\\\" routerLink=\\\"polarareachart\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <i class=\\\"fa fa-fw fa-bullseye\\\" aria-hidden=\\\"true\\\"></i> <span>PolarAreaChart</span> </a> </li> <li uiSrefActive=\\\"active\\\"> <a class=\\\"dropdown-item\\\" routerLink=\\\"radarchart\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <i class=\\\"fa fa-fw fa-star-o\\\" aria-hidden=\\\"true\\\"></i> <span>RadarChart</span> </a> </li> </ul> </li> <li *ngSwitchCase=\\\"true\\\" ngbDropdown class=\\\"nav-item dropdown pointer\\\" routerLinkActive=\\\"active\\\" [routerLinkActiveOptions]=\\\"{exact: true}\\\"> <a class=\\\"nav-link dropdown-toggle\\\" ngbDropdownToggle href=\\\"javascript:void(0);\\\" id=\\\"entity-menu\\\"> <span> <i class=\\\"fa fa-th-list\\\" aria-hidden=\\\"true\\\"></i> <span> Entities </span> </span> </a> <ul class=\\\"dropdown-menu\\\" ngbDropdownMenu> <li> <a class=\\\"dropdown-item\\\" routerLink=\\\"author\\\" routerLinkActive=\\\"active\\\" [routerLinkActiveOptions]=\\\"{ exact: true }\\\" (click)=\\\"collapseNavbar()\\\"> <i class=\\\"fa fa-fw fa-asterisk\\\" aria-hidden=\\\"true\\\"></i> <span>Author</span> </a> </li> <li> <a class=\\\"dropdown-item\\\" routerLink=\\\"book\\\" routerLinkActive=\\\"active\\\" [routerLinkActiveOptions]=\\\"{ exact: true }\\\" (click)=\\\"collapseNavbar()\\\"> <i class=\\\"fa fa-fw fa-asterisk\\\" aria-hidden=\\\"true\\\"></i> <span>Book</span> </a> </li> </ul> </li> <li *jhiHasAnyAuthority=\\\"'ROLE_ADMIN'\\\" ngbDropdown class=\\\"nav-item dropdown pointer\\\" routerLinkActive=\\\"active\\\" [routerLinkActiveOptions]=\\\"{exact: true}\\\"> <a class=\\\"nav-link dropdown-toggle\\\" ngbDropdownToggle href=\\\"javascript:void(0);\\\" id=\\\"admin-menu\\\"> <span> <i class=\\\"fa fa-user-plus\\\" aria-hidden=\\\"true\\\"></i> <span>Administration</span> </span> </a> <ul class=\\\"dropdown-menu\\\" ngbDropdownMenu> <li> <a class=\\\"dropdown-item\\\" routerLink=\\\"jhi-metrics\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <i class=\\\"fa fa-fw fa-tachometer\\\" aria-hidden=\\\"true\\\"></i> <span>Metrics</span> </a> </li> <li> <a class=\\\"dropdown-item\\\" routerLink=\\\"jhi-health\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <i class=\\\"fa fa-fw fa-heart\\\" aria-hidden=\\\"true\\\"></i> <span>Health</span> </a> </li> <li> <a class=\\\"dropdown-item\\\" routerLink=\\\"jhi-configuration\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <i class=\\\"fa fa-fw fa-list\\\" aria-hidden=\\\"true\\\"></i> <span>Configuration</span> </a> </li> <li> <a class=\\\"dropdown-item\\\" routerLink=\\\"audits\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <i class=\\\"fa fa-fw fa-bell\\\" aria-hidden=\\\"true\\\"></i> <span>Audits</span> </a> </li> <li> <a class=\\\"dropdown-item\\\" routerLink=\\\"logs\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <i class=\\\"fa fa-fw fa-tasks\\\" aria-hidden=\\\"true\\\"></i> <span>Logs</span> </a> </li> <li *ngIf=\\\"swaggerEnabled\\\"> <a class=\\\"dropdown-item\\\" routerLink=\\\"docs\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <i class=\\\"fa fa-fw fa-book\\\" aria-hidden=\\\"true\\\"></i> <span>API</span> </a> </li> </ul> </li> <li ngbDropdown class=\\\"nav-item dropdown pointer\\\" placement=\\\"bottom-right\\\" routerLinkActive=\\\"active\\\" [routerLinkActiveOptions]=\\\"{exact: true}\\\"> <a class=\\\"nav-link dropdown-toggle\\\" ngbDropdownToggle href=\\\"javascript:void(0);\\\" id=\\\"account-menu\\\"> <span *ngIf=\\\"!getImageUrl()\\\"> <i class=\\\"fa fa-user\\\" aria-hidden=\\\"true\\\"></i> <span> Account </span> </span> <span *ngIf=\\\"getImageUrl()\\\"> <img [src]=\\\"getImageUrl()\\\" class=\\\"profile-image img-circle\\\" alt=\\\"Avatar\\\"> </span> </a> <ul class=\\\"dropdown-menu\\\" ngbDropdownMenu> <li *ngSwitchCase=\\\"true\\\"> <a class=\\\"dropdown-item\\\" (click)=\\\"logout()\\\" id=\\\"logout\\\"> <i class=\\\"fa fa-fw fa-sign-out\\\" aria-hidden=\\\"true\\\"></i> <span>Sign out</span> </a> </li> <li *ngSwitchCase=\\\"false\\\"> <a class=\\\"dropdown-item\\\" (click)=\\\"login()\\\" id=\\\"login\\\"> <i class=\\\"fa fa-fw fa-sign-in\\\" aria-hidden=\\\"true\\\"></i> <span>Sign in</span> </a> </li> </ul> </li> </ul> </div> </nav> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbD9jNWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRNQUE0TSwrWkFBK1osU0FBUyw0UUFBNFEsWUFBWSxxUkFBcVIsWUFBWSxzRkFBc0YsZ3VEQUFndUQsWUFBWSxzRkFBc0Ysb1JBQW9SLGNBQWMseU9BQXlPLGNBQWMsd1JBQXdSLFlBQVksc0ZBQXNGLDRoREFBNGhELFlBQVksc0ZBQXNGIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kYXJrIG5hdmJhci1leHBhbmQtbWQgamgtbmF2YmFyXFxcIj4gPGRpdiBjbGFzcz1cXFwiamgtbG9nby1jb250YWluZXIgZmxvYXQtbGVmdFxcXCI+IDxhIGNsYXNzPVxcXCJqaC1uYXZiYXItdG9nZ2xlciBkLWxnLW5vbmUgZmxvYXQtcmlnaHRcXFwiIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKTtcXFwiIGRhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCIgZGF0YS10YXJnZXQ9XFxcIiNuYXZiYXJSZXNwb25zaXZlXFxcIiBhcmlhLWNvbnRyb2xzPVxcXCJuYXZiYXJSZXNwb25zaXZlXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCIgYXJpYS1sYWJlbD1cXFwiVG9nZ2xlIG5hdmlnYXRpb25cXFwiIChjbGljayk9XFxcInRvZ2dsZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWJhcnNcXFwiPjwvaT4gPC9hPiA8YSBjbGFzcz1cXFwibmF2YmFyLWJyYW5kIGxvZ28gZmxvYXQtbGVmdFxcXCIgcm91dGVyTGluaz1cXFwiL1xcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJsb2dvLWltZ1xcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwibmF2YmFyLXRpdGxlXFxcIj5FbnZBbmc1PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwibmF2YmFyLXZlcnNpb25cXFwiPnt7dmVyc2lvbn19PC9zcGFuPiA8L2E+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2VcXFwiIGlkPVxcXCJuYXZiYXJSZXNwb25zaXZlXFxcIiBbbmdiQ29sbGFwc2VdPVxcXCJpc05hdmJhckNvbGxhcHNlZFxcXCIgW25nU3dpdGNoXT1cXFwiaXNBdXRoZW50aWNhdGVkKClcXFwiPiA8dWwgY2xhc3M9XFxcIm5hdmJhci1uYXYgbWwtYXV0b1xcXCI+IDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cXFwie2V4YWN0OiB0cnVlfVxcXCI+IDxhIGNsYXNzPVxcXCJuYXYtbGlua1xcXCIgcm91dGVyTGluaz1cXFwiL1xcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxzcGFuPiA8aSBjbGFzcz1cXFwiZmEgZmEtaG9tZVxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4+SG9tZWU8L3NwYW4+IDwvc3Bhbj4gPC9hPiA8L2xpPiA8bGkgbmdiRHJvcGRvd24gY2xhc3M9XFxcIm5hdi1pdGVtIGRyb3Bkb3duIHBvaW50ZXJcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cXFwie2V4YWN0OiB0cnVlfVxcXCI+IDxhIGNsYXNzPVxcXCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcXFwiIG5nYkRyb3Bkb3duVG9nZ2xlIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKTtcXFwiIGlkPVxcXCJkYXNoYm9hcmQtbWVudVxcXCI+IDxzcGFuPiA8aSBjbGFzcz1cXFwiZmEgZmEtYXJlYS1jaGFydFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4+RGFzaGJvYXJkPC9zcGFuPiA8YiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvYj4gPC9zcGFuPiA8L2E+IDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgbmdiRHJvcGRvd25NZW51PiA8bGkgdWlTcmVmQWN0aXZlPVxcXCJhY3RpdmVcXFwiPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwiYmFyY2hhcnRcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS1iYXItY2hhcnRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuPkJhckNoYXJ0PC9zcGFuPiA8L2E+IDwvbGk+IDxsaSB1aVNyZWZBY3RpdmU9XFxcImFjdGl2ZVxcXCI+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJkb3VnaG51dGNoYXJ0XFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtY2lyY2xlLW8tbm90Y2hcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuPkRvdWdobnV0Q2hhcnQ8L3NwYW4+IDwvYT4gPC9saT4gPGxpIHVpU3JlZkFjdGl2ZT1cXFwiYWN0aXZlXFxcIj4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImxpbmVjaGFydFxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLWxpbmUtY2hhcnRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuPkxpbmVDaGFydDwvc3Bhbj4gPC9hPiA8L2xpPiA8bGkgdWlTcmVmQWN0aXZlPVxcXCJhY3RpdmVcXFwiPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwicGllY2hhcnRcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS1waWUtY2hhcnRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuPlBpZUNoYXJ0PC9zcGFuPiA8L2E+IDwvbGk+IDxsaSB1aVNyZWZBY3RpdmU9XFxcImFjdGl2ZVxcXCI+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJwb2xhcmFyZWFjaGFydFxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLWJ1bGxzZXllXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3Bhbj5Qb2xhckFyZWFDaGFydDwvc3Bhbj4gPC9hPiA8L2xpPiA8bGkgdWlTcmVmQWN0aXZlPVxcXCJhY3RpdmVcXFwiPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwicmFkYXJjaGFydFxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLXN0YXItb1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4+UmFkYXJDaGFydDwvc3Bhbj4gPC9hPiA8L2xpPiA8L3VsPiA8L2xpPiA8bGkgKm5nU3dpdGNoQ2FzZT1cXFwidHJ1ZVxcXCIgbmdiRHJvcGRvd24gY2xhc3M9XFxcIm5hdi1pdGVtIGRyb3Bkb3duIHBvaW50ZXJcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cXFwie2V4YWN0OiB0cnVlfVxcXCI+IDxhIGNsYXNzPVxcXCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcXFwiIG5nYkRyb3Bkb3duVG9nZ2xlIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKTtcXFwiIGlkPVxcXCJlbnRpdHktbWVudVxcXCI+IDxzcGFuPiA8aSBjbGFzcz1cXFwiZmEgZmEtdGgtbGlzdFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4+IEVudGl0aWVzIDwvc3Bhbj4gPC9zcGFuPiA8L2E+IDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgbmdiRHJvcGRvd25NZW51PiA8bGk+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJhdXRob3JcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cXFwieyBleGFjdDogdHJ1ZSB9XFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLWFzdGVyaXNrXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3Bhbj5BdXRob3I8L3NwYW4+IDwvYT4gPC9saT4gPGxpPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwiYm9va1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVxcXCJ7IGV4YWN0OiB0cnVlIH1cXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtYXN0ZXJpc2tcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuPkJvb2s8L3NwYW4+IDwvYT4gPC9saT4gPC91bD4gPC9saT4gPGxpICpqaGlIYXNBbnlBdXRob3JpdHk9XFxcIidST0xFX0FETUlOJ1xcXCIgbmdiRHJvcGRvd24gY2xhc3M9XFxcIm5hdi1pdGVtIGRyb3Bkb3duIHBvaW50ZXJcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cXFwie2V4YWN0OiB0cnVlfVxcXCI+IDxhIGNsYXNzPVxcXCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcXFwiIG5nYkRyb3Bkb3duVG9nZ2xlIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKTtcXFwiIGlkPVxcXCJhZG1pbi1tZW51XFxcIj4gPHNwYW4+IDxpIGNsYXNzPVxcXCJmYSBmYS11c2VyLXBsdXNcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuPkFkbWluaXN0cmF0aW9uPC9zcGFuPiA8L3NwYW4+IDwvYT4gPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiBuZ2JEcm9wZG93bk1lbnU+IDxsaT4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImpoaS1tZXRyaWNzXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtdGFjaG9tZXRlclxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4+TWV0cmljczwvc3Bhbj4gPC9hPiA8L2xpPiA8bGk+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJqaGktaGVhbHRoXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtaGVhcnRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuPkhlYWx0aDwvc3Bhbj4gPC9hPiA8L2xpPiA8bGk+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJqaGktY29uZmlndXJhdGlvblxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLWxpc3RcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuPkNvbmZpZ3VyYXRpb248L3NwYW4+IDwvYT4gPC9saT4gPGxpPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwiYXVkaXRzXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtYmVsbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4+QXVkaXRzPC9zcGFuPiA8L2E+IDwvbGk+IDxsaT4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImxvZ3NcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS10YXNrc1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4+TG9nczwvc3Bhbj4gPC9hPiA8L2xpPiA8bGkgKm5nSWY9XFxcInN3YWdnZXJFbmFibGVkXFxcIj4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImRvY3NcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS1ib29rXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3Bhbj5BUEk8L3NwYW4+IDwvYT4gPC9saT4gPC91bD4gPC9saT4gPGxpIG5nYkRyb3Bkb3duIGNsYXNzPVxcXCJuYXYtaXRlbSBkcm9wZG93biBwb2ludGVyXFxcIiBwbGFjZW1lbnQ9XFxcImJvdHRvbS1yaWdodFxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVxcXCJ7ZXhhY3Q6IHRydWV9XFxcIj4gPGEgY2xhc3M9XFxcIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVxcXCIgbmdiRHJvcGRvd25Ub2dnbGUgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgaWQ9XFxcImFjY291bnQtbWVudVxcXCI+IDxzcGFuICpuZ0lmPVxcXCIhZ2V0SW1hZ2VVcmwoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS11c2VyXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3Bhbj4gQWNjb3VudCA8L3NwYW4+IDwvc3Bhbj4gPHNwYW4gKm5nSWY9XFxcImdldEltYWdlVXJsKClcXFwiPiA8aW1nIFtzcmNdPVxcXCJnZXRJbWFnZVVybCgpXFxcIiBjbGFzcz1cXFwicHJvZmlsZS1pbWFnZSBpbWctY2lyY2xlXFxcIiBhbHQ9XFxcIkF2YXRhclxcXCI+IDwvc3Bhbj4gPC9hPiA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIG5nYkRyb3Bkb3duTWVudT4gPGxpICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgKGNsaWNrKT1cXFwibG9nb3V0KClcXFwiIGlkPVxcXCJsb2dvdXRcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtc2lnbi1vdXRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuPlNpZ24gb3V0PC9zcGFuPiA8L2E+IDwvbGk+IDxsaSAqbmdTd2l0Y2hDYXNlPVxcXCJmYWxzZVxcXCI+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiAoY2xpY2spPVxcXCJsb2dpbigpXFxcIiBpZD1cXFwibG9naW5cXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtc2lnbi1pblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4+U2lnbiBpbjwvc3Bhbj4gPC9hPiA8L2xpPiA8L3VsPiA8L2xpPiA8L3VsPiA8L2Rpdj4gPC9uYXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/layouts/navbar/navbar.component.html\n");

/***/ })

})