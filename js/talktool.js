$(document).ready(inittalk);

function centreimage(i, image)
{
    $(image).css("width", image.width + "px");
}
function inittalk()
{
    $('img').each(centreimage);

    $(document).keydown(handlepress);
    $(document).click(handleclick);
}

function handlepress(event)
{
    if(event.keyCode == 37)
    {
        pageback();
    }
    if(event.keyCode == 39)
    {
        pageforward();
    }
}

function pageback()
{
    page = window.location.href.split("/").pop();
    if (page == firstpage)
    {
        return;
    }
    pname = page.split(".")[0];
    pparts = pname.split("_");
    newname = pparts[0] + "_" + (parseInt(pparts[1]) -1)  + ".html";
    i = window.location.href.lastIndexOf('/');
    newbase = window.location.href.substring(0, i+1);
    window.location = newbase + newname;
}

function pageforward()
{
    page = window.location.href.split("/").pop();
    if (page == lastpage)
    {
        return;
    }
    pname = page.split(".")[0];
    pparts = pname.split("_");
    newname = pparts[0] + "_" + (parseInt(pparts[1]) +1)  + ".html";
    i = window.location.href.lastIndexOf('/');
    newbase = window.location.href.substring(0, i+1);
    window.location = newbase + newname;
}

function handleclick(event)
{
    if(event.clientX < document.width * 0.2)
    {
        pageback();
    }

    if(event.clientX > document.width * 0.8)
    {
        pageforward();
    }

}


