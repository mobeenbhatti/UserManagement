using userManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using userDB;

namespace userManagement.Controllers
{
    public class userController : ApiController
    {


        userEntities _userEntities;

        public userController()
        {
            _userEntities = _userEntities == null ? new userEntities() : _userEntities;

        }



        [HttpGet]
        public IHttpActionResult Getstudent()
        {
            List<user> users = _userEntities.users.ToList();
           
                return Ok(users);
        }
        public IHttpActionResult GetStudentById(int id)
        {

            user _user = _userEntities.users.FirstOrDefault((x) => x.u_Id == id);
            if (_user == null)
            {
                //HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.NotFound);

                //return response;

                return NotFound();
            }

            //HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK,objstudent);

            //return response;

            return Ok(_user);

        }
        public IHttpActionResult DeleteStudent(int id)
        {

            user _user = _userEntities.users.FirstOrDefault((x) => x.u_Id == id);
            if (_user == null)
            {
                //HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.NotFound);

                //return response;

                return NotFound();
            }
            else
            {
                _userEntities.users.Remove(_user);
                _userEntities.SaveChanges();

            }

            //HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK,objstudent);

            //return response;

            return Ok(_user);


        }

        public HttpResponseMessage PostStudent( students std)
        {

            HttpResponseMessage response;

            try
            {

                if (std.u_id == 0)
                {
                    user _user = new user();
                    _user.Age = std.Age;
                    _user.Name = std.Name;
                    _user.Email = std.Email;
                    _user.Gender = std.Gender;
                    _user.Degree = std.Degree;


                    _userEntities.users.Add(_user);
                    _userEntities.SaveChanges();
                    response = Request.CreateResponse(HttpStatusCode.Created);

                    return response;
                }
                else
                {
                    user _user = _userEntities.users.FirstOrDefault((x) => x.u_Id == std.u_id);




                    if (_user != null)
                    {
                        _user.Age = std.Age;
                        _user.Name = std.Name;
                        _user.Email = std.Email;
                        _user.Gender = std.Gender;
                        _user.Degree = std.Degree;
                        
                        _userEntities.SaveChanges();

                       
                    }
                    response = Request.CreateResponse(HttpStatusCode.OK);
                    return response;

                }

              


            }
            catch (Exception)
            {

                response = Request.CreateResponse(HttpStatusCode.BadRequest);

                return response;
            }

           


        }

    
    }
}
