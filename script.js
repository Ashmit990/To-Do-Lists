
let submitBtn = document.querySelector(".btn");
let Maain=document.querySelector(".mainn");


submitBtn.addEventListener("click", () => {
    let inputText = document.querySelector(".txt");
    let text = inputText.value; 

    if (text.trim() !== "") { 
        let DoDiv = document.createElement("div");
        DoDiv.className = "Dos";

        let labelBox = document.createElement("label");

        let image=document.createElement("img");
        image.src="https://e7.pngegg.com/pngimages/854/935/png-clipart-computer-icons-scalable-graphics-icon-design-delete-button-logo-sign-thumbnail.png"

        let uncheckBox = document.createElement("div");
        uncheckBox.className = "uncheck";
        let checkBox = document.createElement("div");
        checkBox.classList = "check hide";
        checkBox.innerText = "✓"; 

        uncheckBox.append(checkBox);
        let textSpan = document.createElement("span");
        textSpan.className = "task-text";
        textSpan.innerText = text;
        labelBox.append(uncheckBox);
        labelBox.append(textSpan);

        DoDiv.prepend(labelBox);
        DoDiv.append(image)

        Maain.before(DoDiv);

        uncheckBox.addEventListener("click", function() {
            checkBox.classList.toggle("hide");
            textSpan.classList.toggle("line-through");
        });

        image.addEventListener("click",function(){
            DoDiv.remove();
        })

      
        

        
        inputText.value = "";
    } else {
        alert("Please enter some text.");
    }

    
});