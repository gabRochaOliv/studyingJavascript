function AnoBissexto (ano)
{
if(ano <= 0)
{
    return false
}
else if(ano % 400 == 0)
{
    return true
}
else if(ano % 4 == 0)
{
    return true
}
else if(ano % 100 == 0)
{
    return true
}
else
{
    return false
}

}

console.log(AnoBissexto(2022))

console.log(AnoBissexto(0))

console.log(AnoBissexto(2020))
