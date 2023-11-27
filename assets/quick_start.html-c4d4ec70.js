import{_ as t,Z as a,$ as l,a0 as e,a1 as i,a2 as d,a4 as s,H as r}from"./framework-d03928c9.js";const c={},o=s(`<p>C# is a programming language developed by Microsoft that runs on the .NET framework.</p><h2 id="_1-syntax" tabindex="-1"><a class="header-anchor" href="#_1-syntax" aria-hidden="true">#</a> 1. Syntax</h2><h3 id="_1-1-hello-world" tabindex="-1"><a class="header-anchor" href="#_1-1-hello-world" aria-hidden="true">#</a> 1.1 Hello World</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;

namespace HelloWorld
{
   class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(&quot;Hello World!&quot;);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Every C# statement ends with a semicolon <code>;</code></li><li><code>using System</code> means that we can use classes from the <code>System</code> namespace</li><li><code>namespace</code> is used to organize your code, and it is a container for classes and other namespace</li><li><code>class</code> is a container for data and methods</li></ul><h3 id="_1-2-comments" tabindex="-1"><a class="header-anchor" href="#_1-2-comments" aria-hidden="true">#</a> 1.2 Comments</h3><h4 id="single-line-comments" tabindex="-1"><a class="header-anchor" href="#single-line-comments" aria-hidden="true">#</a> Single-line Comments</h4><p>Start with two forward slashes <code>//</code>.</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>// this is a comment
Console.WriteLine(&quot;Hello&quot;); // Comment here
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="multi-line-comments" tabindex="-1"><a class="header-anchor" href="#multi-line-comments" aria-hidden="true">#</a> Multi-line Comments</h4><p>Start with <code>/*</code> and ends with <code>*/</code>, any text between these will be ignored by C#.</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>/* This is the 
 * multi-line Comment
 */
Console.WriteLine(&quot;Hello World&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-variables" tabindex="-1"><a class="header-anchor" href="#_1-4-variables" aria-hidden="true">#</a> 1.4 Variables</h3><h4 id="declare-variables" tabindex="-1"><a class="header-anchor" href="#declare-variables" aria-hidden="true">#</a> Declare Variables</h4><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>// Single varible
// type variableName = value;
int myAge = 10;
string name;
// Mutilple variables
/// type n1 = v1, n2 = v2 ...
int x = 1, y =2;
int u, v;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="constants" tabindex="-1"><a class="header-anchor" href="#constants" aria-hidden="true">#</a> Constants</h4><p>Add <code>const</code> keyword in front of the variable type will declare it as “constant” which means unchanged and read-only.</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>const in myAge = 10;
// error
// myAge = 11;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="identifier" tabindex="-1"><a class="header-anchor" href="#identifier" aria-hidden="true">#</a> Identifier</h4><p>All C# variables must be identified with unique names that called identifiers.</p><p>Rules of naming variables :</p><ul><li>Can contain letters, digits and the underscore character <code>_</code></li><li>Must begin with a <strong>letter</strong></li><li>Should start with a <strong>lowercase</strong> letter and cannot contain whitespace</li><li>Cannot use <strong>reserved</strong> words like <code>int</code>, <code>double</code>…</li></ul><h2 id="_2-data-type" tabindex="-1"><a class="header-anchor" href="#_2-data-type" aria-hidden="true">#</a> 2. Data Type</h2><table><thead><tr><th style="text-align:left;">Data Type</th><th style="text-align:left;">Size</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">int</td><td style="text-align:left;">4 bytes</td><td style="text-align:left;">Stores whole numbers from -2,147,483,648 to 2,147,483,647</td></tr><tr><td style="text-align:left;">long</td><td style="text-align:left;">8 bytes</td><td style="text-align:left;">Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807</td></tr><tr><td style="text-align:left;">float</td><td style="text-align:left;">4 bytes</td><td style="text-align:left;">Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits</td></tr><tr><td style="text-align:left;">double</td><td style="text-align:left;">8 bytes</td><td style="text-align:left;">Stores fractional numbers. Sufficient for storing 15 decimal digits</td></tr><tr><td style="text-align:left;">bool</td><td style="text-align:left;">1 bit</td><td style="text-align:left;">Stores true or false values</td></tr><tr><td style="text-align:left;">char</td><td style="text-align:left;">2 bytes</td><td style="text-align:left;">Stores a single character/letter, surrounded by single quotes</td></tr><tr><td style="text-align:left;">string</td><td style="text-align:left;">2 bytes per character</td><td style="text-align:left;">Stores a sequence of characters, surrounded by double quotes</td></tr></tbody></table><h3 id="_2-1-type-casting" tabindex="-1"><a class="header-anchor" href="#_2-1-type-casting" aria-hidden="true">#</a> 2.1 Type Casting</h3><p>In C#, there are two types of casting:</p><ul><li><strong>Implicit Casting</strong> (automatically) - converting a smaller type to a larger type size <code>char</code> -&gt; <code>int</code> -&gt; <code>long</code> -&gt; <code>float</code> -&gt; <code>double</code></li><li><strong>Explicit Casting</strong> (manually) - converting a larger type to a smaller size type <code>double</code> -&gt; <code>float</code> -&gt; <code>long</code> -&gt; <code>int</code> -&gt; <code>char</code>. It is also possible to convert data types explicitly by using built-in methods, such as <code>Convert.ToBoolean</code>, <code>Convert.ToDouble</code>, <code>Convert.ToString</code>, <code>Convert.ToInt32</code> (<code>int</code>) and <code>Convert.ToInt64</code> (<code>long</code>).</li></ul><h2 id="_3-operators" tabindex="-1"><a class="header-anchor" href="#_3-operators" aria-hidden="true">#</a> 3. Operators</h2><h4 id="arithmetic-operators" tabindex="-1"><a class="header-anchor" href="#arithmetic-operators" aria-hidden="true">#</a> Arithmetic operators</h4><table><thead><tr><th style="text-align:left;">Operator</th><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th><th style="text-align:left;">Example</th></tr></thead><tbody><tr><td style="text-align:left;">+</td><td style="text-align:left;">Addition</td><td style="text-align:left;">Adds together two values</td><td style="text-align:left;">x + y</td></tr><tr><td style="text-align:left;">-</td><td style="text-align:left;">Subtraction</td><td style="text-align:left;">Subtracts one value from another</td><td style="text-align:left;">x - y</td></tr><tr><td style="text-align:left;">*</td><td style="text-align:left;">Multiplication</td><td style="text-align:left;">Multiplies two values</td><td style="text-align:left;">x * y</td></tr><tr><td style="text-align:left;">/</td><td style="text-align:left;">Division</td><td style="text-align:left;">Divides one value by another</td><td style="text-align:left;">x / y</td></tr><tr><td style="text-align:left;">%</td><td style="text-align:left;">Modulus</td><td style="text-align:left;">Returns the division remainder</td><td style="text-align:left;">x % y</td></tr><tr><td style="text-align:left;">++</td><td style="text-align:left;">Increment</td><td style="text-align:left;">Increases the value of a variable by 1</td><td style="text-align:left;">x++</td></tr><tr><td style="text-align:left;">--</td><td style="text-align:left;">Decrement</td><td style="text-align:left;">Decreases the value of a variable by 1</td><td style="text-align:left;">x--</td></tr></tbody></table><h4 id="assignment-operators" tabindex="-1"><a class="header-anchor" href="#assignment-operators" aria-hidden="true">#</a> Assignment operators:</h4><table><thead><tr><th style="text-align:left;">Operator</th><th style="text-align:left;">Example</th><th style="text-align:left;">Same As</th></tr></thead><tbody><tr><td style="text-align:left;">=</td><td style="text-align:left;">x = 5</td><td style="text-align:left;">x = 5</td></tr><tr><td style="text-align:left;">+=</td><td style="text-align:left;">x += 3</td><td style="text-align:left;">x = x + 3</td></tr><tr><td style="text-align:left;">-=</td><td style="text-align:left;">x -= 3</td><td style="text-align:left;">x = x - 3</td></tr><tr><td style="text-align:left;">*=</td><td style="text-align:left;">x *= 3</td><td style="text-align:left;">x = x * 3</td></tr><tr><td style="text-align:left;">/=</td><td style="text-align:left;">x /= 3</td><td style="text-align:left;">x = x / 3</td></tr><tr><td style="text-align:left;">%=</td><td style="text-align:left;">x %= 3</td><td style="text-align:left;">x = x % 3</td></tr><tr><td style="text-align:left;">&amp;=</td><td style="text-align:left;">x &amp;= 3</td><td style="text-align:left;">x = x &amp; 3</td></tr><tr><td style="text-align:left;">|=</td><td style="text-align:left;">x |= 3</td><td style="text-align:left;">x = x | 3</td></tr><tr><td style="text-align:left;">^=</td><td style="text-align:left;">x ^= 3</td><td style="text-align:left;">x = x ^ 3</td></tr><tr><td style="text-align:left;">&gt;&gt;=</td><td style="text-align:left;">x &gt;&gt;= 3</td><td style="text-align:left;">x = x &gt;&gt; 3</td></tr><tr><td style="text-align:left;">&lt;&lt;=</td><td style="text-align:left;">x &lt;&lt;= 3</td><td style="text-align:left;">x = x &lt;&lt; 3</td></tr></tbody></table><h4 id="comparison-operators" tabindex="-1"><a class="header-anchor" href="#comparison-operators" aria-hidden="true">#</a> Comparison operators</h4><table><thead><tr><th style="text-align:left;">Operator</th><th style="text-align:left;">Name</th><th style="text-align:left;">Example</th></tr></thead><tbody><tr><td style="text-align:left;">==</td><td style="text-align:left;">Equal to</td><td style="text-align:left;">x == y</td></tr><tr><td style="text-align:left;">!=</td><td style="text-align:left;">Not equal</td><td style="text-align:left;">x != y</td></tr><tr><td style="text-align:left;">&gt;</td><td style="text-align:left;">Greater than</td><td style="text-align:left;">x &gt; y</td></tr><tr><td style="text-align:left;">&lt;</td><td style="text-align:left;">Less than</td><td style="text-align:left;">x &lt; y</td></tr><tr><td style="text-align:left;">&gt;=</td><td style="text-align:left;">Greater than or equal to</td><td style="text-align:left;">x &gt;= y</td></tr><tr><td style="text-align:left;">&lt;=</td><td style="text-align:left;">Less than or equal to</td><td style="text-align:left;">x &lt;= y</td></tr></tbody></table><h4 id="logical-operators" tabindex="-1"><a class="header-anchor" href="#logical-operators" aria-hidden="true">#</a> Logical Operators</h4><table><thead><tr><th style="text-align:left;">Operator</th><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th><th style="text-align:left;">Example</th></tr></thead><tbody><tr><td style="text-align:left;">&amp;&amp;</td><td style="text-align:left;">Logical and</td><td style="text-align:left;">Returns True if both statements are true</td><td style="text-align:left;">x &lt; 5 &amp;&amp; x &lt; 10</td></tr><tr><td style="text-align:left;">||</td><td style="text-align:left;">Logical or</td><td style="text-align:left;">Returns True if one of the statements is true</td><td style="text-align:left;">x &lt; 5 || x &lt; 4</td></tr><tr><td style="text-align:left;">!</td><td style="text-align:left;">Logical not</td><td style="text-align:left;">Reverse the result, returns False if the result is true</td><td style="text-align:left;">!(x &lt; 5 &amp;&amp; x &lt; 10)</td></tr></tbody></table><h2 id="_4-flow-control" tabindex="-1"><a class="header-anchor" href="#_4-flow-control" aria-hidden="true">#</a> 4. Flow Control</h2><h3 id="_4-1-if-else" tabindex="-1"><a class="header-anchor" href="#_4-1-if-else" aria-hidden="true">#</a> 4.1 If-else</h3><p>If-else if :</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (condition1)
{
  // block of code to be executed if condition1 is True
} 
else if (condition2) 
{
  // block of code to be executed if the condition1 is false and condition2 is True
} 
else
{
  // block of code to be executed if the condition1 is false and condition2 is False
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-switch" tabindex="-1"><a class="header-anchor" href="#_4-2-switch" aria-hidden="true">#</a> 4.2 Switch</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>switch(expression) 
{
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
    break;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-loop" tabindex="-1"><a class="header-anchor" href="#_4-3-loop" aria-hidden="true">#</a> 4.3 Loop</h3><h4 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> While</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>while (condition) 
{
  // code block to be executed
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="do-while" tabindex="-1"><a class="header-anchor" href="#do-while" aria-hidden="true">#</a> Do-while</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>do 
{
  // code block to be executed
}
while (condition);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> For</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>for (statement 1; statement 2; statement 3) 
{
  // code block to be executed
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> Foreach</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>foreach (type variableName in arrayName) 
{
  // code block to be executed
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-array" tabindex="-1"><a class="header-anchor" href="#_5-array" aria-hidden="true">#</a> 5. Array</h2><p>To declare a array, define the variable type with square brackets:</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>string[] cars;
string[] names {&quot;A&quot;, &quot;B&quot;};
Console.WriteLine(names[0]); // access array element
Console.WriteLine(names.Length); // get length of array
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-method" tabindex="-1"><a class="header-anchor" href="#_6-method" aria-hidden="true">#</a> 6. Method</h2><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>class Program
{
  static void MyMethod(parameters declaration) 
  {
    // code to be executed
  }
}

static void Main(string[] args)
{
  MyMethod(parameters);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It is good practice to start with an <strong>uppercase</strong> letter when naming methods.</p><h3 id="_6-1-default-method-value" tabindex="-1"><a class="header-anchor" href="#_6-1-default-method-value" aria-hidden="true">#</a> 6.1 Default Method Value</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>static void MyMethod(string country = &quot;Norway&quot;) 
{
  Console.WriteLine(country);
}

static void Main(string[] args)
{
  MyMethod(&quot;Sweden&quot;);
  MyMethod(&quot;India&quot;);
  MyMethod();
  MyMethod(&quot;USA&quot;);
}

// Sweden
// India
// Norway
// USA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-named-arguments" tabindex="-1"><a class="header-anchor" href="#_6-2-named-arguments" aria-hidden="true">#</a> 6.2 Named Arguments</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>static void MyMethod(string child1, string child2, string child3) 
{
  Console.WriteLine(&quot;The youngest child is: &quot; + child3);
}

static void Main(string[] args)
{
  MyMethod(child3: &quot;John&quot;, child1: &quot;Liam&quot;, child2: &quot;Liam&quot;);
}

// The youngest child is: John
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-method-overloading" tabindex="-1"><a class="header-anchor" href="#_6-3-method-overloading" aria-hidden="true">#</a> 6.3 Method Overloading</h3><p>With <strong>method overloading</strong>, multiple methods can have the same name with different parameters:</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>int MyMethod(int x)
float MyMethod(float x)
double MyMethod(double x, double y)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-oop" tabindex="-1"><a class="header-anchor" href="#_7-oop" aria-hidden="true">#</a> 7. OOP</h2><h3 id="_7-1-class" tabindex="-1"><a class="header-anchor" href="#_7-1-class" aria-hidden="true">#</a> 7.1 Class</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>class ClassName 
{
  // Class Members
  // fields
  type fieldName = value;
  // methods
  public void MethodName(...) 
  {
      //...
  }
    
  public static void StaticMethodName(...)
  {
      //...
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Fields and methods inside classes are referred to as “Class Members”.</p><h4 id="objects" tabindex="-1"><a class="header-anchor" href="#objects" aria-hidden="true">#</a> Objects</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>class Car 
{
  string color = &quot;red&quot;;

  static void Main(string[] args)
  {
    Car myObj = new Car();
    Console.WriteLine(myObj.color);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>use <code>new</code> to create objects.</p><h4 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> Constructor</h4><p>A special method to initialize objects.</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>// Create a Car class
class Car
{
  public string model;  // Create a field

  // Create a class constructor for the Car class
  public Car()
  {
    model = &quot;Mustang&quot;; // Set the initial value for model
  }

  static void Main(string[] args)
  {
    Car Ford = new Car();  // Create an object of the Car Class (this will call the constructor)
    Console.WriteLine(Ford.model);  // Print the value of model
  }
}

// Outputs &quot;Mustang&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-access-modifiers" tabindex="-1"><a class="header-anchor" href="#_7-2-access-modifiers" aria-hidden="true">#</a> 7.2 Access Modifiers</h3><table><thead><tr><th style="text-align:left;">Modifier</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>public</code></td><td style="text-align:left;">The code is accessible for all classes</td></tr><tr><td style="text-align:left;"><code>private</code></td><td style="text-align:left;">The code is only accessible within the same class</td></tr><tr><td style="text-align:left;"><code>protected</code></td><td style="text-align:left;">The code is accessible within the same class, or in a class that is inherited from that class.</td></tr><tr><td style="text-align:left;"><code>internal</code></td><td style="text-align:left;">The code is only accessible within its own assembly, but not from another assembly.</td></tr></tbody></table><h3 id="_7-3-properties-and-encapsulation" tabindex="-1"><a class="header-anchor" href="#_7-3-properties-and-encapsulation" aria-hidden="true">#</a> 7.3 Properties And Encapsulation</h3><p>The meaning of <strong>Encapsulation</strong>, is to make sure that &quot;sensitive&quot; data is hidden from users. To achieve this, you must:</p><ul><li>declare fields/variables as <code>private</code></li><li>provide <code>public</code> <code>get</code> and <code>set</code> methods, through <strong>properties</strong>, to access and update the value of a <code>private</code> field</li></ul><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>class Person
{
  private string name; // field

  public string Name   // property
  {
    get { return name; }   // get method
    set { name = value; }  // set method
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="automatic-properties" tabindex="-1"><a class="header-anchor" href="#automatic-properties" aria-hidden="true">#</a> Automatic Properties</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>class Person
{
  public string Name  // property
  { get; set; }
}

class Program
{
  static void Main(string[] args)
  {
    Person myObj = new Person();
    myObj.Name = &quot;Liam&quot;;
    Console.WriteLine(myObj.Name);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-4-inheritance" tabindex="-1"><a class="header-anchor" href="#_7-4-inheritance" aria-hidden="true">#</a> 7.4 Inheritance</h3><p>It’s possible to inherit fields and methods from one class to another, and “inheritance concept” can grouped into 2 categories:</p><ul><li><strong>Derived Class (child)</strong>: the class that inherits from another class</li><li><strong>Base Class (parent)</strong>: the class being inherited from</li></ul><p>Use <code>:</code> to inherit from a class :</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>class Vehicle  // base class (parent) 
{
  public string brand = &quot;Ford&quot;;  // Vehicle field
  public void honk()             // Vehicle method 
  {                    
    Console.WriteLine(&quot;Tuut, tuut!&quot;);
  }
}

class Car : Vehicle  // derived class (child)
{
  public string modelName = &quot;Mustang&quot;;  // Car field
}

class Program
{
  static void Main(string[] args)
  {
    // Create a myCar object
    Car myCar = new Car();

    // Call the honk() method (From the Vehicle class) on the myCar object
    myCar.honk();

    // Display the value of the brand field (from the Vehicle class) and the value of the modelName from the Car class
    Console.WriteLine(myCar.brand + &quot; &quot; + myCar.modelName);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-5-polymorphism" tabindex="-1"><a class="header-anchor" href="#_7-5-polymorphism" aria-hidden="true">#</a> 7.5 Polymorphism</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>class Animal  // Base class (parent) 
{
  public void animalSound() 
  {
    Console.WriteLine(&quot;The animal makes a sound&quot;);
  }
}

class Pig : Animal  // Derived class (child) 
{
  public void animalSound() 
  {
    Console.WriteLine(&quot;The pig says: wee wee&quot;);
  }
}

class Dog : Animal  // Derived class (child) 
{
  public void animalSound() 
  {
    Console.WriteLine(&quot;The dog says: bow wow&quot;);
  }
}

class Program 
{
  static void Main(string[] args) 
  {
    Animal myAnimal = new Animal();  // Create a Animal object
    Animal myPig = new Pig();  // Create a Pig object
    Animal myDog = new Dog();  // Create a Dog object

    myAnimal.animalSound();
    myPig.animalSound();
    myDog.animalSound();
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>The animal makes a sound
The animal makes a sound
The animal makes a sound
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The output from the example above was probably not what you expected. That is because the base class method overrides the derived class method, when they share the same name.</p><p>C# provides an option to override the base class method, by adding the <code>virtual</code> keyword to the method inside the base class, and by using the <code>override</code> keyword for each derived class methods:</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>class Animal  // Base class (parent) 
{
  public virtual void animalSound() 
  {
    Console.WriteLine(&quot;The animal makes a sound&quot;);
  }
}

class Pig : Animal  // Derived class (child) 
{
  public override void animalSound() 
  {
    Console.WriteLine(&quot;The pig says: wee wee&quot;);
  }
}

class Dog : Animal  // Derived class (child) 
{
  public override void animalSound() 
  {
    Console.WriteLine(&quot;The dog says: bow wow&quot;);
  }
}

class Program 
{
  static void Main(string[] args) 
  {
    Animal myAnimal = new Animal();  // Create a Animal object
    Animal myPig = new Pig();  // Create a Pig object
    Animal myDog = new Dog();  // Create a Dog object

    myAnimal.animalSound();
    myPig.animalSound();
    myDog.animalSound();
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>The animal makes a sound
The pig says: wee wee
The dog says: bow wow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-6-abstract-classes-and-methods" tabindex="-1"><a class="header-anchor" href="#_7-6-abstract-classes-and-methods" aria-hidden="true">#</a> 7.6 Abstract Classes and Methods</h3><p>The <code>abstract</code> keyword is used for classes and methods:</p><ul><li><strong>Abstract Class</strong>: is restricted class that cannot be used to create objects</li><li><strong>Abstract Method</strong>: can only be used in an abstract class, and it does not have a body.</li></ul><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>abstract class Animal 
{
  public abstract void animalSound();
  public void sleep() 
  {
    Console.WriteLine(&quot;Zzz&quot;);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-7-interface" tabindex="-1"><a class="header-anchor" href="#_7-7-interface" aria-hidden="true">#</a> 7.7 Interface</h3><p>Interface can only contain abstract methods and properties.</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>// Interface
interface IAnimal 
{
  void animalSound(); // interface method (does not have a body)
}

// Pig &quot;implements&quot; the IAnimal interface
class Pig : IAnimal 
{
  public void animalSound() 
  {
    // The body of animalSound() is provided here
    Console.WriteLine(&quot;The pig says: wee wee&quot;);
  }
}

class Program 
{
  static void Main(string[] args) 
  {
    Pig myPig = new Pig();  // Create a Pig object
    myPig.animalSound();
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Like <strong>abstract classes</strong>, interfaces <strong>cannot</strong> be used to create objects (in the example above, it is not possible to create an &quot;IAnimal&quot; object in the Program class)</li><li>Interface methods do not have a body - the body is provided by the &quot;implement&quot; class</li><li>On implementation of an interface, you must override all of its methods</li><li>Interfaces can contain properties and methods, but not fields/variables</li><li>Interface members are by default <code>abstract</code> and <code>public</code></li><li>An interface cannot contain a constructor (as it cannot be used to create objects)</li></ul><h3 id="_7-8-enum" tabindex="-1"><a class="header-anchor" href="#_7-8-enum" aria-hidden="true">#</a> 7.8 Enum</h3><p>An <code>enum</code> is special <code>class</code> that represents a group of constants.</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>enum Level 
{
  Low,
  Medium,
  High
}
// ...
Level myVar = Level.Medium;
Console.WriteLine(myVar);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="enum-inside-class" tabindex="-1"><a class="header-anchor" href="#enum-inside-class" aria-hidden="true">#</a> Enum inside Class</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>class Program
{
  enum Level
  {
    Low,
    Medium,
    High
  }
  static void Main(string[] args)
  {
    Level myVar = Level.Medium;
    Console.WriteLine(myVar);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="enum-values" tabindex="-1"><a class="header-anchor" href="#enum-values" aria-hidden="true">#</a> Enum values</h4><p>By default, the first item of an <code>enum</code> has the value 0, the second is 1 and so on.</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>enum Months
{
  January,    // 0
  February,   // 1
  March,      // 2
  April,      // 3
  May,        // 4
  June,       // 5
  July,       // 6
  Sept = 9	  // you can set specific value	
}

static void Main(string[] args)
{
  int myNum = (int) Months.April;
  Console.WriteLine(myNum);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="enum-with-switch" tabindex="-1"><a class="header-anchor" href="#enum-with-switch" aria-hidden="true">#</a> Enum with Switch</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>enum Level 
{
  Low,
  Medium,
  High
}

static void Main(string[] args) 
{
  Level myVar = Level.Medium;
  switch(myVar) 
  {
    case Level.Low:
      Console.WriteLine(&quot;Low level&quot;);
      break;
    case Level.Medium:
       Console.WriteLine(&quot;Medium level&quot;);
      break;
    case Level.High:
      Console.WriteLine(&quot;High level&quot;);
      break;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,114),v={href:"https://www.w3schools.com/cs/index.php",target:"_blank",rel:"noopener noreferrer"};function u(m,b){const n=r("ExternalLinkIcon");return a(),l("div",null,[o,e("ol",null,[e("li",null,[e("a",v,[i("C# Tutorial"),d(n)]),i(" W3schools")])])])}const g=t(c,[["render",u],["__file","quick_start.html.vue"]]);export{g as default};
