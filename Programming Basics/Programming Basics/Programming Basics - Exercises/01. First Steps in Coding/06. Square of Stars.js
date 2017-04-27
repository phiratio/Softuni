/**
 * Created by Void-S on 27-Feb-17.
 */
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrintSquare
{
    class Program
    {
        static void Main(string[] args)
    {
        var n = int.Parse(Console.ReadLine());
        //var n = 5;
        var stars = String.Concat(Enumerable.Repeat("*", n));
        //  var stars = "";
        //  for (var i = 0; i < n; i++)
        //  {
        //      stars += "*";
        //  }
        Console.WriteLine(stars);
        for (var ii = 0; ii < n - 2; ii++)
    {
        Console.WriteLine("*" + String.Concat(Enumerable.Repeat(" ", n - 2)) + "*");
    }
    Console.WriteLine(stars);
}
}
}