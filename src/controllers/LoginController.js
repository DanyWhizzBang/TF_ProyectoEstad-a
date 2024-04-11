function login(req, res) {
    if (req.session.loggedin) {
          // Output username
      res.redirect('/');
      
    } else {
      res.render('login/index');
    }
  }
  
  function register(req, res) {
    res.render('login/register');
  }
  
  function auth(req, res) {
      let name = req.body.name;
      let password = req.body.password;
  
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM usuarios WHERE name = ?', [name], (err, rows) => {
        if(rows.length > 0) {
          console.log(rows);
        } else {
          console.log('not');
        }
        /*
        req.session.loggedin = true;
      req.session.name = name;
  
    res.redirect('/');*/
        
      });
    });
  }
  
  function logout(req, res) {
    if (req.session.loggedin) {
      req.session.destroy();
    }
    res.redirect('/');
  }
  
  
  module.exports = {
    login: login,
    register: register,
    auth: auth,
    logout: logout,
  };