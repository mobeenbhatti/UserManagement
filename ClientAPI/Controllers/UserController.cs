using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ClientAPI.Models;

namespace ClientAPI.Controllers
{

    public class UserController : ApiController
    {

        //User _User = new User() {
        //    Name = "Mobeen",
        //    email = "mobeen.bhatti@gmail.com",
        //    age = 100,
        //    qualification = "MCS"
        //};


        User[] _Users = new User[]
    {
      new User() {userID=1,Name = "mobeen",age =100,email="mobeen.bhatti@gmail.com",gender="male",qualification="MCS" },
      new User() {userID=2,Name = "rameez",age =100,email="mobeen.bhatti@gmail.com",gender="male",qualification="MCS" },
      new User() {userID=3,Name = "akmal",age =100,email="mobeen.bhatti@gmail.com",gender="male",qualification="MCS" }
    };

        public IEnumerable<User> GetAllUsers()
        {
                
                return _Users;
        }

        public IHttpActionResult GetUserByID(int id)
        {
            var user = _Users.FirstOrDefault((p) => p.userID == id);

            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
      
        }



    }


}
