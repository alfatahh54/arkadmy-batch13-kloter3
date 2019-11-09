function getProfile(nama, umur)
{
  data = {
    "name": nama,
    "age": umur,
    "address": "Padamara Rt 04/Rw 02, Kecamatan Padamara, Kabupaten Purbalingga", 
    "hobbies": ["Music","Gaming","Coding"],
    "is_married": false,
    "list_school": [{
        "name": "SMAN 1 Purbalingga",
        "year_in":2012, 
        "year_out":2015, 
        "major": "IPA"
    },{
        "name": "Universitas Jendral Soedirman",
        "year_in":2015, 
        "year_out":2019, 
        "major": "Matematika"
    }],
    "skills": [{
        "name": "C++",
      	"level":"Advance"
    },{
      	"name":"Visual Basic",
      	"level":"Advance"
    }],
    "interest_in_coding":true
  }
  return JSON.stringify(data)
}
let nama = "Alfatah Hidayat";
let umur = 22;
console.log(getProfile(nama, umur));