
// Eksempler på udregninger:

momsUdrgner(125, 25, "Danmark");

momsUdrgner(125, 19, "Tyskland");

momsUdrgner(125, 22, "Italien");

function momsUdrgner(beloeb, moms, land){
    console.log(` I ${land} er momsen ${moms}%, derfor er beløbet med moms: ${beloeb * (1 + (moms/100))}`)

}