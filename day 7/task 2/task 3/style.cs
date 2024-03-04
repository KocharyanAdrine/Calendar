.navbar {
  background-color: #333;
  padding: 10px 0;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}
.menu li {
  margin-right: 20px;
}
.menu li:last-child {
  margin-right: 0;
}
.menu a {
  color: #fff;
  text-decoration: none;
}
.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}
.hamburger {
  display: block;
  width: 20px;
  height: 3px;
  background-color: #fff;
}

.menu {
  display: none;
}

.menu.active {
  display: flex;
}
@media screen and (min-width: 768px) {
  .menu-toggle {
    display: none; 
  }
  .menu {
    display: flex !important; 
  }
}