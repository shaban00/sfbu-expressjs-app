# SFBU Express.js application

## Retrieve all student info

### Request 1

```bash
curl -k https://localhost:8080/api/v1/students
```

- curl option **-k** is used to ignore SSL certificate warning.

### Ressponse 1

```json
{
  "students": [
    {
      "student_id": "",
      "first_name": "",
      "last_name": "",
      "degree": "MSCS",
      "trimester": 3,
      "courses": [
        {
          "course_id": "CS648",
          "course_name": "Web Service with REST"
        },
        {
          "course_id": "",
          "course_name": ""
        },
        {
          "course_id": "",
          "course_name": ""
        }
      ],
      "address": {
        "city": "Fremont",
        "state": "CA",
        "zip": "12345"
      }
    },
    {
      "student_id": "19938",
      "first_name": "Akshaykumar",
      "last_name": "Patel",
      "degree": "MSCS",
      "trimester": 2,
      "courses": [
        {
          "course_id": "CS548",
          "course_name": "Web Service with REST"
        },
        {
          "course_id": "CS501",
          "course_name": "Practical Application of Algorithms"
        },
        {
          "course_id": "CS526",
          "course_name": "Advanced Web Programming"
        },
        {
          "course_id": "CS531",
          "course_name": "Python Application Programming"
        }
      ],
      "address": {
        "city": "San Jose",
        "state": "CA",
        "zip": "95126"
      }
    },
    {
      "student_id": "19904",
      "first_name": "Shaban Mohammedsaani",
      "last_name": "Hassan",
      "degree": "MSCS",
      "trimester": 3,
      "courses": [
        {
          "course_id": "CS531",
          "course_name": "Python Applications Programming"
        },
        {
          "course_id": "CS535",
          "course_name": "Network Security Fundamentals"
        },
        {
          "course_id": "CS548",
          "course_name": "Web Services Techniques and REST Technologies"
        }
      ],
      "address": {
        "city": "Fremont",
        "state": "CA",
        "zip": "94536"
      }
    },
    {
      "student_id": "19981",
      "first_name": "Savitha Shree",
      "last_name": "Mohanraj",
      "degree": "MSCS",
      "trimester": 2,
      "courses": [
        {
          "course_id": "CS501",
          "course_name": "Practical Application of Algorithms"
        },
        {
          "course_id": "CS526",
          "course_name": "Advanced Web Programming"
        },
        {
          "course_id": "CS548",
          "course_name": "Web Services Techniques and REST Technologies"
        },
        {
          "course_id": "CS589",
          "course_name": "Special Topics: Generative AI-Driven Intelligent Apps Development"
        }
      ],
      "address": {
        "city": "Santa Clara",
        "state": "CA",
        "zip": "95054"
      }
    },
    {
      "student_id": "19808",
      "first_name": "Dongyang",
      "last_name": "Su",
      "degree": "MSCS",
      "trimester": 4,
      "courses": [
        {
          "course_id": "CS548",
          "course_name": "Web Services Techniques and REST Technologies"
        },
        {
          "course_id": "CS526",
          "course_name": "Advanced Web Programming"
        }
      ],
      "address": {
        "city": "Redwood City",
        "state": "CA",
        "zip": "94061"
      }
    },
    {
      "student_id": "20012",
      "first_name": "Trung Dung",
      "last_name": "Ly",
      "degree": "MSCS",
      "trimester": 2,
      "courses": [
        {
          "course_id": "CS548",
          "course_name": "Web Services Techniques and REST Technologies"
        },
        {
          "course_id": "CS589",
          "course_name": "Special Topics: Natural Language Processing"
        },
        {
          "course_id": "MKT541(B)",
          "course_name": "Strategic Marketing"
        }
      ],
      "address": {
        "city": "San Jose",
        "state": "CA",
        "zip": "95116"
      }
    },
    {
      "student_id": "19983",
      "first_name": "Ekta",
      "last_name": "Awasthi",
      "degree": "MSCS",
      "trimester": 2,
      "courses": [
        {
          "course_id": "CS548",
          "course_name": "Web Services Techniques and REST Technologies"
        },
        {
          "course_id": "CS501(A)",
          "course_name": "Practical Application of Algorithms"
        },
        {
          "course_id": "CS521(A)",
          "course_name": "Software Project Management"
        },
        {
          "course_id": "CS581",
          "course_name": "Cloud Security"
        }
      ],
      "address": {
        "city": "San Jose",
        "state": "CA",
        "zip": "95134"
      }
    },
    {
      "student_id": "19946",
      "first_name": "Rahel",
      "last_name": "Tekle",
      "degree": "MSCS",
      "trimester": 2,
      "courses": [
        {
          "course_id": "CS548",
          "course_name": "Web Services Techniques and REST Technologies"
        },
        {
          "course_id": "CS522",
          "course_name": "Software Quality Assurance and Test Automation"
        },
        {
          "course_id": "CS550",
          "course_name": "Machine Learning and Business Intelligence"
        }
      ],
      "address": {
        "city": "Fremont",
        "state": "CA",
        "zip": "94539"
      }
    },
    {
      "student_id": "19931",
      "first_name": "Sihan",
      "last_name": "Ma",
      "degree": "MSCS",
      "trimester": 2,
      "courses": [
        {
          "course_id": "CS548",
          "course_name": "Web Services Techniques and REST Technologies"
        },
        {
          "course_id": "CS521",
          "course_name": "Software Project Management"
        },
        {
          "course_id": "CS531",
          "course_name": "Python Application Programming"
        }
      ],
      "address": {
        "city": "Fremont",
        "state": "CA",
        "zip": "94539"
      }
    },
    {
      "student_id": "19927",
      "first_name": "Yixuan",
      "last_name": "Sun",
      "degree": "MSCS",
      "trimester": 2,
      "courses": [
        {
          "course_id": "CS548",
          "course_name": "Web Service Techniques and REST Technologies"
        },
        {
          "course_id": "CS540",
          "course_name": "Advanced Database Administration"
        },
        {
          "course_id": "CS521",
          "course_name": "Software Project Management"
        },
        {
          "course_id": "CS589",
          "course_name": "Special Topics Natural Language Processing"
        }
      ],
      "address": {
        "city": "Fremont",
        "state": "CA",
        "zip": "94539"
      }
    },
    {
      "student_id": "19775",
      "first_name": "Yixuan",
      "last_name": "Liang",
      "degree": "MSCS",
      "trimester": 4,
      "courses": [
        {
          "course_id": "CS548",
          "course_name": "Web Services Techniques and REST Technologies"
        },
        {
          "course_id": "CS521(B)",
          "course_name": "Software Project Management"
        },
        {
          "course_id": "CS535",
          "course_name": "Network Security Fundamentals"
        }
      ],
      "address": {
        "city": "San Jose",
        "state": "CA",
        "zip": "95134"
      }
    },
    {
      "student_id": "19937",
      "first_name": "Gautam",
      "last_name": "Phuyal",
      "degree": "MSCS",
      "trimester": 2,
      "courses": [
        {
          "course_id": "CS548",
          "course_name": "Web Services Techniques and REST Technologies"
        },
        {
          "course_id": "CS531",
          "course_name": "Python Application Programming"
        },
        {
          "course_id": "CS550",
          "course_name": "Machine Learning and Business Intelligence"
        },
        {
          "course_id": "CS481",
          "course_name": "Introduction to Data Science"
        }
      ],
      "address": {
        "city": "Fremont",
        "state": "CA",
        "zip": "94539"
      }
    },
    {
      "student_id": "19876",
      "first_name": "Xin",
      "last_name": "Wen",
      "degree": "MSCS",
      "trimester": 3,
      "courses": [
        {
          "course_id": "CS548",
          "course_name": "Web Service Techniques and REST Technologies"
        },
        {
          "course_id": "571",
          "course_name": "Cloud Computing Infrastructure"
        },
        {
          "course_id": "550",
          "course_name": "Machine Learning and Business Intelligence"
        }
      ],
      "address": {
        "city": "Fremont",
        "state": "CA",
        "zip": "94539"
      }
    },
    {
      "student_id": "19798",
      "first_name": "Liang",
      "last_name": "Chen",
      "degree": "MSCS",
      "trimester": 3,
      "courses": [
        {
          "course_id": "CS548",
          "course_name": "Web Service Techniques and REST Technologies"
        },
        {
          "course_id": "CS531",
          "course_name": "Python Application Program"
        },
        {
          "course_id": "CS540",
          "course_name": "Advanced Database Administration "
        }
      ],
      "address": {
        "city": "San Jose",
        "state": "CA",
        "zip": "95131"
      }
    },
    {
      "student_id": "19993",
      "first_name": "Ziqi",
      "last_name": "Zhou",
      "degree": "MSCS",
      "trimester": 2,
      "courses": [
        {
          "course_id": "CS548",
          "course_name": "Web Service Techniques and REST Technologies"
        },
        {
          "course_id": "CS485",
          "course_name": "JavaScript and Internet Programming"
        },
        {
          "course_id": "MKT450",
          "course_name": "Marketing Management"
        }
      ],
      "address": {
        "city": "Fremont",
        "state": "CA",
        "zip": "94539"
      }
    },
    {
      "student_id": "19958",
      "first_name": "Ying",
      "last_name": "Xie",
      "degree": "MSCS",
      "trimester": 2,
      "courses": [
        {
          "course_id": "CS548",
          "course_name": "Web Service Techniques and REST Technologies"
        },
        {
          "course_id": "CS501",
          "course_name": "Practical Application of Algorithms"
        },
        {
          "course_id": "MKT545",
          "course_name": "Global Trade and Operations"
        }
      ],
      "address": {
        "city": "Fremont",
        "state": "CA",
        "zip": "94539"
      }
    },
    {
      "student_id": "19997",
      "first_name": "Abylay",
      "last_name": "Aiyp",
      "degree": "MSCS",
      "trimester": 2,
      "courses": [
        {
          "course_id": "CS548",
          "course_name": "Web Service Techniques and REST Technologies"
        },
        {
          "course_id": "CS526",
          "course_name": "Advanced Web Programming"
        },
        {
          "course_id": "CS531",
          "course_name": "Python Applications Programming"
        }
      ],
      "address": {
        "city": "Fremont",
        "state": "CA",
        "zip": "94539"
      }
    },
    {
      "student_id": "19977",
      "first_name": "Miao",
      "last_name": "Tian",
      "degree": "MSCS",
      "trimester": 2,
      "courses": [
        {
          "course_id": "CS548",
          "course_name": "Web Service Techniques and REST Technologies"
        },
        {
          "course_id": "CS535",
          "course_name": "Network Security Fundamentals"
        },
        {
          "course_id": "CS550",
          "course_name": "Machine Learning And Business Intelligence"
        },
        {
          "course_id": "CS531",
          "course_name": "Python Applications Programming"
        }
      ],
      "address": {
        "city": "Fremont",
        "state": "CA",
        "zip": "94539"
      }
    },
    {
      "student_id": "19679",
      "first_name": "Ademilton Marcelo",
      "last_name": "Da Cruz Nunes",
      "degree": "MSCS",
      "trimester": 4,
      "courses": [
        {
          "course_id": "CS548",
          "course_name": "Web Service with REST"
        },
        {
          "course_id": "CS494",
          "course_name": "Senior Capstone Project - I"
        },
        {
          "course_id": "CS589",
          "course_name": "Natural Language Processing"
        }
      ],
      "address": {
        "city": "San Francisco",
        "state": "CA",
        "zip": "94123"
      }
    }
  ],
  "ip_address": "::1",
  "device": "curl/8.6.0"
}
```

## Retrieve student info based on student_id

### Request 2

```bash
curl -k -X POST \
  -H "Content-Type: application/json" \
  -d '{"student_id": "19904"}' \
  https://localhost:8080/api/v1/students/student-id
```

- option **-k** is used to ignore SSL certificate warning.
- option **-X** is used to specify the request method to use.
- option **-H** is used to pass custom headers
- option **-d** is used to pass data to a post request

### Ressponse 2

```json
{
  "student": {
    "student_id": "19904",
    "first_name": "Shaban Mohammedsaani",
    "last_name": "Hassan",
    "degree": "MSCS",
    "trimester": 3,
    "courses": [
      {
        "course_id": "CS531",
        "course_name": "Python Applications Programming"
      },
      {
        "course_id": "CS535",
        "course_name": "Network Security Fundamentals"
      },
      {
        "course_id": "CS548",
        "course_name": "Web Services Techniques and REST Technologies"
      }
    ],
    "address": {
      "city": "Fremont",
      "state": "CA",
      "zip": "94536"
    }
  },
  "ip_address": "::1",
  "device": "curl/8.6.0"
}
```

## Retrieve students who have taken CS548

### Request 3

```bash
curl -k -X POST \
  -H "Content-Type: application/json" \
  https://localhost:8080/api/v1/students/cs548
```

- option **-k** is used to ignore SSL certificate warning.
- option **-X** is used to specify the request method to use.
- option **-H** is used to pass custom headers

### Ressponse 3

```json
{
  "student_ids": [
    "19938",
    "19904",
    "19981",
    "19808",
    "20012",
    "19983",
    "19946",
    "19931",
    "19927",
    "19775",
    "19937",
    "19876",
    "19798",
    "19993",
    "19958",
    "19997",
    "19977",
    "19679"
  ],
  "ip_address": "::1",
  "device": "curl/8.6.0"
}
```

## Retrieve students who have taken your courses except CS548

### Request 4

```bash
curl -k -X POST \
  -H "Content-Type: application/json" \
  -d '{"student_id": "19904"}' \
  https://localhost:8080/api/v1/students/exclude-cs548
```

- option **-k** is used to ignore SSL certificate warning.
- option **-X** is used to specify the request method to use.
- option **-H** is used to pass custom headers
- option **-d** is used to pass data to a post request

### Ressponse 4

```json
{
  "students": [
    {
      "student_id": "19938",
      "first_name": "Akshaykumar",
      "last_name": "Patel",
      "degree": "MSCS",
      "trimester": 2,
      "courses": [
        {
          "course_id": "CS548",
          "course_name": "Web Service with REST"
        },
        {
          "course_id": "CS501",
          "course_name": "Practical Application of Algorithms"
        },
        {
          "course_id": "CS526",
          "course_name": "Advanced Web Programming"
        },
        {
          "course_id": "CS531",
          "course_name": "Python Application Programming"
        }
      ],
      "address": {
        "city": "San Jose",
        "state": "CA",
        "zip": "95126"
      }
    },
    {
      "student_id": "19904",
      "first_name": "Shaban Mohammedsaani",
      "last_name": "Hassan",
      "degree": "MSCS",
      "trimester": 3,
      "courses": [
        {
          "course_id": "CS531",
          "course_name": "Python Applications Programming"
        },
        {
          "course_id": "CS535",
          "course_name": "Network Security Fundamentals"
        },
        {
          "course_id": "CS548",
          "course_name": "Web Services Techniques and REST Technologies"
        }
      ],
      "address": {
        "city": "Fremont",
        "state": "CA",
        "zip": "94536"
      }
    },
    {
      "student_id": "19931",
      "first_name": "Sihan",
      "last_name": "Ma",
      "degree": "MSCS",
      "trimester": 2,
      "courses": [
        {
          "course_id": "CS548",
          "course_name": "Web Services Techniques and REST Technologies"
        },
        {
          "course_id": "CS521",
          "course_name": "Software Project Management"
        },
        {
          "course_id": "CS531",
          "course_name": "Python Application Programming"
        }
      ],
      "address": {
        "city": "Fremont",
        "state": "CA",
        "zip": "94539"
      }
    },
    {
      "student_id": "19775",
      "first_name": "Yixuan",
      "last_name": "Liang",
      "degree": "MSCS",
      "trimester": 4,
      "courses": [
        {
          "course_id": "CS548",
          "course_name": "Web Services Techniques and REST Technologies"
        },
        {
          "course_id": "CS521(B)",
          "course_name": "Software Project Management"
        },
        {
          "course_id": "CS535",
          "course_name": "Network Security Fundamentals"
        }
      ],
      "address": {
        "city": "San Jose",
        "state": "CA",
        "zip": "95134"
      }
    },
    {
      "student_id": "19937",
      "first_name": "Gautam",
      "last_name": "Phuyal",
      "degree": "MSCS",
      "trimester": 2,
      "courses": [
        {
          "course_id": "CS548",
          "course_name": "Web Services Techniques and REST Technologies"
        },
        {
          "course_id": "CS531",
          "course_name": "Python Application Programming"
        },
        {
          "course_id": "CS550",
          "course_name": "Machine Learning and Business Intelligence"
        },
        {
          "course_id": "CS481",
          "course_name": "Introduction to Data Science"
        }
      ],
      "address": {
        "city": "Fremont",
        "state": "CA",
        "zip": "94539"
      }
    },
    {
      "student_id": "19798",
      "first_name": "Liang",
      "last_name": "Chen",
      "degree": "MSCS",
      "trimester": 3,
      "courses": [
        {
          "course_id": "CS548",
          "course_name": "Web Service Techniques and REST Technologies"
        },
        {
          "course_id": "CS531",
          "course_name": "Python Application Program"
        },
        {
          "course_id": "CS540",
          "course_name": "Advanced Database Administration "
        }
      ],
      "address": {
        "city": "San Jose",
        "state": "CA",
        "zip": "95131"
      }
    },
    {
      "student_id": "19997",
      "first_name": "Abylay",
      "last_name": "Aiyp",
      "degree": "MSCS",
      "trimester": 2,
      "courses": [
        {
          "course_id": "CS548",
          "course_name": "Web Service Techniques and REST Technologies"
        },
        {
          "course_id": "CS526",
          "course_name": "Advanced Web Programming"
        },
        {
          "course_id": "CS531",
          "course_name": "Python Applications Programming"
        }
      ],
      "address": {
        "city": "Fremont",
        "state": "CA",
        "zip": "94539"
      }
    },
    {
      "student_id": "19977",
      "first_name": "Miao",
      "last_name": "Tian",
      "degree": "MSCS",
      "trimester": 2,
      "courses": [
        {
          "course_id": "CS548",
          "course_name": "Web Service Techniques and REST Technologies"
        },
        {
          "course_id": "CS535",
          "course_name": "Network Security Fundamentals"
        },
        {
          "course_id": "CS550",
          "course_name": "Machine Learning And Business Intelligence"
        },
        {
          "course_id": "CS531",
          "course_name": "Python Applications Programming"
        }
      ],
      "address": {
        "city": "Fremont",
        "state": "CA",
        "zip": "94539"
      }
    }
  ],
  "ip_address": "::1",
  "device": "curl/8.6.0"
}
```
