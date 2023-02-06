<script>
    var inputText = document.getElementById("inputText").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.php", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
           var response = xhr.responseText;
           // do something with the response here
        }
    };
    xhr.send(inputText);
</script>
    