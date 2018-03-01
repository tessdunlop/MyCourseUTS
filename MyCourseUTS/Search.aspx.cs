using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json;
using MyCourseUTS.DataModel;
using MyCourseUTS.Manager;
using MyCourseUTS.Entity;


namespace MyCourseUTS
{
    public partial class Search : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
        }

        [System.Web.Services.WebMethod]
        public static string GetAllCourses()
        {
            try
            {
                var mgr = new Manager.MyCourseManager();
                var data = mgr.GetAllCourses();
                var response = MyCourseUTS.Entity.Response.GenerateResponse(true, data, string.Empty);
                var s = JsonConvert.SerializeObject(response);
                return s;
            }
            catch (Exception ex)
            {
                var response = MyCourseUTS.Entity.Response.GenerateResponse(false, null, ex.Message);
                var s = JsonConvert.SerializeObject(response);
                return s;
            }
        }

    }
}

