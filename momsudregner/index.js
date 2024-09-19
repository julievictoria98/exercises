

momsUdrgner(125, "Danmark");

momsUdrgner(125, "Tyskland", 19);

momsUdrgner(125, "Italien", 22);

function momsUdrgner(beloeb, land, moms = 25){
    console.log(` I ${land} er momsen ${moms}%, derfor er beløbet med moms: ${beloeb * (1 + (moms/100))}`)

}