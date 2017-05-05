using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;

namespace holmescode.com {
    public class Program {
        public static void Main(string[] args) {
            var builder = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>();

            if (Environment.GetEnvironmentVariable("REGION_NAME") != null) {
                builder.UseAzureAppServices();
            }

            var host = builder.Build();
            host.Run();
        }
    }
}
