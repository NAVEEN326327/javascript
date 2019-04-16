<!DOCTYPE html>
<html>

<body>

<h2>JavaScript String Methods</h2>

<p>Replace "Alpha" with "Beeta" in the paragraph below:</p>

<button onclick="myFunction()">Try it</button>

<p id="demo">Use Alpha!</p>

<script>
function myFunction() {
  var str = document.getElementById("demo").innerHTML; 
  var txt = str.replace("Alpha","Beeta");
  document.getElementById("demo").innerHTML = txt;
}
</script>

</body>
</html>