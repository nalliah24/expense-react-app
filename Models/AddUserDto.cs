﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace expense_react_app.Models
{
    public class AddUserDto
    {
        public string UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string CostCentre { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
