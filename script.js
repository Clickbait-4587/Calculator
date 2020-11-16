let ans = ""
, val=""
, outpt=""
, screenTxtAfter = ""
, buttons = document.querySelectorAll('.keys')
, screenText = $("#screen-text")
, screenTextAfter = $("#screen-text-after");

class Control {
    static handleClick(e){
        if (e.target.dataset.val === "=") {
            try{ let eva = eval(val)
                let ans = val + "=" + eva;
                $("#ans").text(eva);
                screenTextAfter.text(ans);
            }catch(err){
                screenTextAfter.text("Undefined");
            }
           
            screenText.text("");
            val = "";
        } else if (e.target.id === "ac") {
            val = "";
            $("#ans").text("Ans");
        } else if (e.target.id=== "del") {
            val = screenText.text().slice(0, screenText.text().length - 1);
            screenText.text(screenText.text().slice(0, screenText.text().length - 1));
        } else {
            val += e.target.dataset.val;
            screenText.append(e.target.dataset.val);
            screenTextAfter.text().slice();
        }
        if (!val.length) {
            $("#screen-text").text("");
        }
    }
    static handleKeyDown(e){
        if (e.key == 'Enter') {
            $('#equals').click();
        }
        if (e.key == 'Escape') {
            $('#ac').click();
        }
        if (e.key == 'Backspace') {
           $('#del').click();
        }
        buttons.forEach(btn=>{
                    if (e.key == btn.dataset.val) btn.click();
                })
    }
}


$(document).ready(()=>{

    $(document).keydown(e=>{
        Control.handleKeyDown(e)
    })
    $('.keys').click((e)=>{
        Control.handleClick(e)
    })
})