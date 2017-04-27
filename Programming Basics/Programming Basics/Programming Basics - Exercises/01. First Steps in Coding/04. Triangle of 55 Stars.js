/**
 * Created by Void-S on 27-Feb-17.
 */
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TriangleOf55Stars
{
    class Program
    {
        static void Main(string[] args)
    {
        var stars = "*";
        for(var i = 0; i < 10; i++)
    {

        Console.WriteLine(stars);
        stars += "*";
    }
}
}
}