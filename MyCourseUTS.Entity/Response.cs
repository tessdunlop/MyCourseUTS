using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCourseUTS.Entity
{
    public class Response
    {
        public bool Success { get; set; }
        public object Data { get; set; }
        public string Message { get; set; }

        public static Response GenerateResponse(bool Success, object Data, string Message) {
            Response r = new Response()
            {
                Success = Success,
                Data = Data,
                Message = Message
            };
            return r;
        }
    }
}
