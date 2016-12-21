using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClientAPI.Models
{
    public class User
    {
        public int userID { get; set; }
        public string Name { get; set; }
        public string email { get; set; }
        public int age { get; set; }
        public string gender { get; set; }
        public string qualification { get; set; }
    }
}