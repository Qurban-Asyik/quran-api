# Al-Quran API

![Al-Quran API](/public/quran.png)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.0-orange)

A comprehensive RESTful API for accessing the Holy Quran with translations in multiple languages including Arabic, English, Bengali, and more.

## 🌐 Live Demo

Visit the live API and documentation at [https://quran.qurbanasyik.com](https://quran.qurbanasyik.com)

## ✨ Features

- **Multilingual Support**: Access the Quran in multiple languages including Arabic, English, Bengali, and more
- **Complete Quran Data**: All 114 surahs with their verses, translations, and metadata
- **RESTful API**: Simple and intuitive API endpoints
- **Search Functionality**: Search for specific words or phrases across the entire Quran
- **No Authentication Required**: Open access for all users
- **CORS Enabled**: Can be used in web applications
- **Edge Runtime**: Fast response times with Vercel Edge Runtime

## 📚 API Documentation

### Base URL



[https://quran.qurbanasyik.com/api/quran](https://quran.qurbanasyik.com/api/quran)

### Endpoints

| Endpoint | Description | Parameters |
|----------|-------------|------------|
| `/api/quran` | Get all surahs | `lang` (optional) |
| `/api/quran/surah/{id}` | Get a specific surah | `id` (required), `lang` (optional) |
| `/api/quran/surah/{id}/verse/{verseId}` | Get a specific verse | `id` (required), `verseId` (required), `lang` (optional) |
| `/api/quran/search` | Search the Quran | `q` (required), `lang` (optional) |
| `/api/quran/languages` | Get available languages | None |

### Language Parameter

All endpoints accept a `lang` query parameter to specify the language. If not specified, English (`en`) is used as the default language.

Available language codes:
- `ar` - Arabic
- `bn` - Bengali
- `en` - English
- `es` - Spanish
- `fr` - French
- `id` - Indonesian
- `ru` - Russian
- `sv` - Swedish
- `tr` - Turkish
- `ur` - Urdu
- `zh` - Chinese
- `transliteration` - Transliteration

### Example Requests

#### Get all surahs in English


GET [https://quran.qurbanasyik.com/api/quran?lang=en](https://quran.qurbanasyik.com/api/quran?lang=en)


#### Get Surah Al-Fatihah in Arabic


GET [https://quran.qurbanasyik.com/api/quran/surah/1?lang=ar](https://quran.qurbanasyik.com/api/quran/surah/1?lang=ar)


#### Get a specific verse


GET [https://quran.qurbanasyik.com/api/quran/surah/1/verse/1?lang=en](https://quran.qurbanasyik.com/api/quran/surah/1/verse/1?lang=en)



#### Search for "mercy" in the Quran


GET [https://quran.qurbanasyik.com/api/quran/search?q=mercy&lang=en](https://quran.qurbanasyik.com/api/quran/search?q=mercy&lang=en)



#### Get available languages


GET [https://quran.qurbanasyik.com/api/quran/languages](https://quran.qurbanasyik.com/api/quran/languages)



## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/saikothasan/quran-api.git
   cd quran-api
```

2. Install dependencies:

```shellscript
npm install
# or
yarn
```


3. Run the development server:

```shellscript
npm run dev
# or
yarn dev
```


4. Open [http://localhost:8301](http://localhost:8301) in your browser to see the result.


### Project Structure

```plaintext
quran-api/
├── app/                  # Next.js App Router
│   ├── api/              # API routes
│   │   └── quran/        # Quran API endpoints
│   ├── about/            # About page
│   ├── demo/             # Demo application
│   ├── documentation/    # API documentation
│   ├── search/           # Search page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── ui/               # UI components (shadcn/ui)
│   └── ...               # Other components
├── lib/                  # Utility functions
│   └── quran-utils.ts    # Quran-related utilities
├── public/               # Static files
│   ├── quran.json        # Arabic Quran data
│   ├── quran_en.json     # English translation
│   ├── quran_bn.json     # Bengali translation
│   └── ...               # Other language files
└── ...                   # Configuration files
```

## 📦 Deployment

This project is deployed on [Vercel](https://vercel.com) and is available at [https://quran.qurbanasyik.com](https://quran.qurbanasyik.com).

To deploy your own instance:

1. Fork this repository
2. Create a new project on Vercel
3. Connect your forked repository
4. Deploy


## 🧩 Using the API in Your Projects

### JavaScript (Fetch)

```javascript
// Get all surahs in English
fetch('https://quran.qurbanasyik.com/api/quran?lang=en')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### React Example

```javascriptreact
import { useState, useEffect } from 'react';

function QuranViewer() {
  const [surah, setSurah] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSurah() {
      try {
        setLoading(true);
        const response = await fetch(
          'https://quran.qurbanasyik.com/api/quran/surah/1?lang=en'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        
        const data = await response.json();
        setSurah(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSurah();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!surah) return <div>No data found</div>;

  return (
    <div>
      <h1>{surah.transliteration} ({surah.translation})</h1>
      <div>
        {surah.verses.map(verse => (
          <div key={verse.id}>
            <p>{verse.text}</p>
            <p>{verse.translation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 📧 Contact

Saiko Thasan - [@saikothasan](https://github.com/saikothasan)

Project Link: [https://github.com/saikothasan/quran-api](https://github.com/saikothasan/quran-api)

## 🙏 Acknowledgements

- [The Noble Quran](https://quran.com/)
- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com)
- [shadcn/ui](https://ui.shadcn.com/)
