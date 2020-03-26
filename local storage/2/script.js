let load = true;
let text2 = document.getElementById("text2");
let button = document.getElementById('button');

if (localStorage["changes"] === undefined) 
{

    localStorage["changes"] = '{"values": ["' + text2.value + '"] }';

}

let changes = JSON.parse(localStorage["changes"]);
let version = changes['values'].length-1;
text2.value = changes['values'][version];

text2.addEventListener('change', function()
{

    changes['values'].push(text2.value);    
    version = changes['values'].length-1;
    add_buttons();

});

if (localStorage["buttons_appeared_once"]) add_buttons();

function add_buttons()
{

    if (button.innerHTML == ''){
        button.innerHTML = "<button id='prev'>←</button><button id='next'>→</button>";

}

    let prev = document.getElementById("prev");
    let next = document.getElementById("next");

    next.disabled = true;
    prev.disabled = false;

    while(load)
    {   

        prev.addEventListener('click', function()
        {

            if (version > 0) 
            {
                version--;
                text2.value = changes['values'][version];
                next.disabled = false;
            }

            if (version == 0) prev.disabled = true;

        });

        next.addEventListener('click', function()
        {

            if (version < changes['values'].length-1) 
            {

                version++;
                text2.value = changes['values'][version];
                prev.disabled = false;

            }

            if (version == changes['values'].length-1) next.disabled = true;

        });

        load = false;
        localStorage["buttons_appeared_once"] = true;

    }

}


window.addEventListener('beforeunload', function()
{

    localStorage["changes"] = JSON.stringify(changes);
});