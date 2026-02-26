import React from 'react';
import { 
  Lightbulb, 
  Target, 
  Database, 
  Brain, 
  Calculator, 
  RefreshCw, 
  Code, 
  FileCheck,
  HelpCircle,
  AlertCircle,
  FileSearch,
  UploadCloud,
  Smile,
  ListChecks,
  ShieldCheck,
  Presentation,
  Send,
  Info
} from 'lucide-react';

export interface Step {
  title: string;
  icon: React.ElementType;
  iconClass: string;
  content: React.ReactNode;
}

const FormEmbed = ({ id, title }: { id: string; title: string }) => (
  <div className="w-full h-[600px] bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl relative overflow-hidden mt-4">
    <iframe 
      src={`https://docs.google.com/forms/d/${id}/viewform?embedded=true`}
      width="100%" 
      height="100%" 
      className="absolute inset-0 z-0"
      title={title}
    >טוען...</iframe>
  </div>
);

const ValeryExample = ({ text }: { text: React.ReactNode }) => (
  <div className="bg-green-50 border-r-4 border-green-500 p-4 rounded-lg my-4">
    <div className="flex items-center gap-2 mb-1">
      <Smile className="w-5 h-5 text-green-600" />
      <h4 className="font-bold text-green-800">הדוגמה של ולרי:</h4>
    </div>
    <div className="text-green-700">{text}</div>
  </div>
);

const MentorQuestion = ({ text }: { text: string }) => (
  <div className="bg-blue-50 border-r-4 border-blue-500 p-4 rounded-lg flex items-start gap-3 mt-6">
    <HelpCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
    <div>
      <h4 className="font-bold text-blue-800">המנטור הסוקראטי שואל:</h4>
      <p className="text-blue-700">{text}</p>
    </div>
  </div>
);

const Mekhavan = ({ items }: { items: { label: string; weight?: string }[] }) => (
  <div className="bg-amber-50 border-r-4 border-amber-500 p-4 rounded-lg my-4">
    <div className="flex items-center gap-2 mb-2">
      <Calculator className="w-5 h-5 text-amber-600" />
      <h4 className="font-bold text-amber-800">איך תקבלו ציון? (מחוון):</h4>
    </div>
    <ul className="space-y-1 text-sm text-amber-900">
      {items.map((item, i) => (
        <li key={i} className="flex justify-between border-b border-amber-200/50 pb-1">
          <span>{item.label}</span>
          {item.weight && <span className="font-bold">{item.weight}</span>}
        </li>
      ))}
    </ul>
  </div>
);

const FormPoints = ({ points }: { points: string[] }) => (
  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 my-4">
    <h4 className="font-bold text-gray-800 mb-2 text-sm">מה עליכם למלא בטופס זה?</h4>
    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
      {points.map((p, i) => <li key={i}>{p}</li>)}
    </ul>
  </div>
);

const SuccessTip = ({ text }: { text: string }) => (
  <div className="bg-green-50 border-r-4 border-green-400 p-4 rounded-lg my-4 flex items-start gap-3">
    <div className="bg-green-100 p-1.5 rounded-full">
      <Smile className="w-5 h-5 text-green-600" />
    </div>
    <div>
      <h4 className="font-bold text-green-800 text-sm">טיפ להצלחה:</h4>
      <p className="text-green-700 text-sm">{text}</p>
    </div>
  </div>
);

export const STEPS: Step[] = [
  {
    title: "יוצאים לדרך: מבוא לפרויקט",
    icon: Info,
    iconClass: 'text-blue-600',
    content: (
      <div className="space-y-6">
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
          <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
            <Brain className="w-6 h-6" />
            מה מחכה לנו?
          </h3>
          <p className="text-blue-800 leading-relaxed">
            בשיעורים הקרובים נהפוך למדעני בינה מלאכותית! נלמד איך לזהות בעיות, לאסוף נתונים ולאמן "מוח" דיגיטלי שיודע לפתור אותן. 
            חלק מהעבודה תתבצע יחד בכיתה וחלק בלמידה עצמית בבית הספר.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <ListChecks className="w-5 h-5 text-green-500" />
              איך עובדים?
            </h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• מתחלקים לצוותים של <strong>עד 3 תלמידים</strong>.</li>
              <li>• בוחרים בעיה אמיתית שמעניינת אתכם.</li>
              <li>• עוברים שלב-שלב באתר וממלאים את הטפסים.</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-amber-500" />
              איך נקבע הציון?
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-700">התקדמות וטפסים (תהליך)</span>
                <span className="font-bold text-amber-600">40%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-400 h-full w-[40%]" />
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-700">המודל והקוד (תוצר)</span>
                <span className="font-bold text-amber-600">30%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full w-[30%]" />
              </div>

              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-700">תיעוד והצגה (סיכום)</span>
                <span className="font-bold text-amber-600">30%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-600 h-full w-[30%]" />
              </div>
            </div>
          </div>
        </div>

        <SuccessTip text="הסוד להצלחה הוא עקביות. הקפידו למלא את הטפסים בסוף כל שיעור עם אותו דוא״ל, זה יחסוך לכם המון עבודה בשלב הסיכום!" />
        
        <MentorQuestion text="האם כבר יש לכם בראש צוות מנצח? מי החברים שאיתם תרצו לצאת למסע הזה?" />
      </div>
    )
  },
  {
    title: "שלב 1: סיעור מוחות",
    icon: Lightbulb,
    iconClass: 'text-yellow-500',
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 text-lg">
          ברוכים הבאים למסע שלכם! השלב הראשון הוא לחלום בגדול. מה מפריע לכם? מה הייתם רוצים לשפר בעולם?
        </p>
        
        <ValeryExample text="ולרי חשב על הקושי של אנשים עם לקות ראייה לזהות שטרות כסף, מכיוון שהם דומים מאוד במגע. הוא חלם על עוזר דיגיטלי שיגיד להם בדיוק איזה שטר הם מחזיקים." />

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 my-6">
          <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
            <Lightbulb className="w-6 h-6 text-yellow-500" />
            רעיונות לפרויקטים להשראה:
          </h4>
          <div className="grid grid-cols-1 gap-6">
            {/* Idea 1 */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <h5 className="font-bold text-indigo-700 text-lg mb-2">1. DJ הרגשות</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>מחלקות (Classes):</strong> שמח, עצוב, כועס, מופתע.</p>
                  <p><strong>הלוגיקה בפייתון:</strong> המערכת מזהה רגש ובוחרת פלייליסט מתאים ב-Spotify או מנגנת קובץ MP3 מקומי.</p>
                </div>
                <div>
                  <p><strong>אתגר הנתונים (Bias):</strong> הבעות פנים משתנות בין תרבויות וגילאים. חשוב לאסוף תמונות של אנשים מגוונים.</p>
                  <p><strong>סוגיה אתית:</strong> האם מותר למערכת "לעקוב" אחרי הרגשות שלנו כל הזמן? מה לגבי פרטיות הפנים?</p>
                </div>
              </div>
            </div>

            {/* Idea 2 */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <h5 className="font-bold text-indigo-700 text-lg mb-2">2. מיחזור חכם</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>מחלקות (Classes):</strong> פלסטיק, נייר, זכוכית, פחית.</p>
                  <p><strong>הלוגיקה בפייתון:</strong> המערכת מזהה את החפץ ומפעילה מנוע (Servo) שפותח את המכסה של הפח הנכון.</p>
                </div>
                <div>
                  <p><strong>אתגר הנתונים (Bias):</strong> בקבוק פלסטיק מעוך נראה אחרת לגמרי מבקבוק חדש. צריך דוגמאות של פסולת "אמיתית".</p>
                  <p><strong>סוגיה אתית:</strong> האם המערכת עלולה להטעות אנשים ולגרום לזיהום סביבתי אם תטעה בסיווג?</p>
                </div>
              </div>
            </div>

            {/* Idea 3 */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <h5 className="font-bold text-indigo-700 text-lg mb-2">3. בקרת יציבה (Posture Check)</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>מחלקות (Classes):</strong> ישיבה זקופה, ישיבה שפופה (Slouching).</p>
                  <p><strong>הלוגיקה בפייתון:</strong> אם המערכת מזהה ישיבה שפופה ליותר מ-10 שניות, היא משמיעה התראה: "נא להזדקף!".</p>
                </div>
                <div>
                  <p><strong>אתגר הנתונים (Bias):</strong> מבנה גוף וגובה שונה של משתמשים. המערכת צריכה לעבוד גם לילדים וגם למבוגרים.</p>
                  <p><strong>סוגיה אתית:</strong> האם התראה קבועה עלולה להלחיץ את המשתמש או לגרום לדימוי גוף שלילי?</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SuccessTip text="אל תנסו למצוא את הרעיון המושלם מיד. רשמו כל מה שעולה לכם לראש, גם אם זה נראה 'משוגע'. אחר כך נבדוק מה הכי מעניין ובר ביצוע." />

        <FormPoints points={[
          "שמות חברי הצוות ודוא\"ל",
          "3 רעיונות שונים לפרויקט",
          "איזו בעיה כל רעיון פותר?",
          "סוג הקלט הנדרש (תמונות/קול/תנוחה)"
        ]} />

        <MentorQuestion text="איזו בעיה קטנה ביומיום שלכם גורמת לכם להגיד 'הלוואי שהיה לזה פתרון'?" />
        
        <FormEmbed id="1J5-bnN28OPO-G10EWfnSwvhVsxhovELvLyTPipRFrr8" title="טופס סיעור מוחות" />
      </div>
    )
  },
  {
    title: "שלב 2: הגדרת הבעיה",
    icon: Target,
    iconClass: 'text-red-500',
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 text-lg">
          עכשיו כשיש לנו רעיון, בואו נהפוך אותו למדויק. מי קהל היעד? מה בדיוק המערכת תזהה?
        </p>

        <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 mb-4">
          <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
            <FileSearch className="w-5 h-5" />
            חומרי עזר וספר הפרויקט:
          </h4>
          <p className="text-indigo-800 text-sm mb-3">בתיקייה זו תמצאו את ספר הפרויקט המלא ותבניות למילוי. מומלץ לשמור אותה במועדפים!</p>
          <a 
            href="https://drive.google.com/drive/folders/1ZWc4ZLEjcC6yULNB5hx1_0c8OcEbZI_6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-indigo-700 transition"
          >
            לתיקיית חומרי הפרויקט (כולל ספר הפרויקט)
            <Presentation className="w-4 h-4" />
          </a>
        </div>
        
        <Mekhavan items={[
          { label: "ניסוח ברור של הבעיה והסבר לבחירה", weight: "20%" },
          { label: "הסבר מדוע נדרשת כאן בינה מלאכותית (ולא תכנות רגיל)", weight: "30%" },
          { label: "זיהוי נכון של קטגוריות הסיווג והסבר התאמתן", weight: "30%" },
          { label: "סוג הנתונים ומקורות סבירים להשגתם", weight: "20%" }
        ]} />

        <ValeryExample text="ולרי הגדיר את הבעיה כך: 'אנשים עיוורים מתקשים להבדיל בין שטרות של 20, 50, 100 ו-200 שקלים'. קהל היעד שלו הוא אנשים עם לקות ראייה בישראל." />

        <SuccessTip text="ככל שתגדירו את הבעיה בצורה יותר 'צרה' וממוקדת, כך יהיה לכם קל יותר לאמן את המודל. במקום 'זיהוי פירות', לכו על 'זיהוי בננה בשלה מול בננה ירוקה'." />

        <FormPoints points={[
          "תיאור האתגר שבחרתם לפתור",
          "קהל היעד שיעזר בפתרון",
          "הסבר למה נכון לפתור זאת בעזרת AI",
          "הגדרת רף הדיוק הנדרש (למשל 90%)"
        ]} />

        <MentorQuestion text="אם הייתם צריכים להסביר את הבעיה שלכם לילד בן 5, איך הייתם מגדירים אותה במשפט אחד?" />

        <FormEmbed id="1-suznBssrt6lswNlPPHQKU9zV0vXw2yIFIs6v2x_U1I" title="טופס הגדרת הבעיה" />
      </div>
    )
  },
  {
    title: "שלב 3: תכנון הפרויקט",
    icon: ListChecks,
    iconClass: 'text-indigo-500',
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 text-lg">
          תכנון טוב הוא חצי מהעבודה! כאן נחליט אילו מחלקות (Classes) יהיו למודל שלנו ואיך נאסוף את המידע.
        </p>
        
        <Mekhavan items={[
          { label: "מבנה המערכת כולל מרכיבים נכונים", weight: "20%" },
          { label: "בסיס נתונים מתאים למבנה הפרויקט", weight: "20%" },
          { label: "זיהוי הטיות והסבר איך להתמודד איתן", weight: "20%" },
          { label: "זיהוי השפעות חברתיות והצעות למזעור פגיעה", weight: "20%" },
          { label: "זיהוי שלבי עבודה וחלוקת זמנים הגיונית", weight: "20%" }
        ]} />

        <ValeryExample text="ולרי תכנן 5 מחלקות: שטר 20, שטר 50, שטר 100, שטר 200, ומחלקה חמישית של 'רקע' (כדי שהמחשב לא יתבלבל כשהוא לא רואה שטר)." />

        <SuccessTip text="אל תשכחו את מחלקת ה'רקע'! המחשב חייב לדעת איך נראה העולם כשאין בו את האובייקט שאתם מחפשים, אחרת הוא ינסה 'בכוח' לסווג כל דבר לאחת המחלקות שלכם." />

        <FormPoints points={[
          "תיאור המערכת כפתרון לבעיה",
          "מי המשתמשים ואיך ישתמשו בה?",
          "איך תאספו את המידע? (צילום עצמי/אינטרנט)",
          "תהליך ניקוי והכנת הנתונים"
        ]} />

        <MentorQuestion text="אילו מצבים שונים המחשב צריך להכיר כדי לא להתבלבל? האם חשבתם על מצב של 'כלום' או 'רקע'?" />

        <FormEmbed id="1PvREKdfHRBHYXC1dmD8ls0hyW7nlmHLd-EX7wV-Qv44" title="טופס שלב התכנון" />
      </div>
    )
  },
  {
    title: "שלב 4: הטיות ואתיקה",
    icon: ShieldCheck,
    iconClass: 'text-orange-500',
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 text-lg">
          בינה מלאכותית יכולה להיות מוטה (Bias). עלינו לוודא שהמערכת שלנו הוגנת ועובדת לכולם ובכל מצב.
        </p>
        
        <ValeryExample text="ולרי הבין שאם הוא יצלם שטרות רק באור יום חזק, המערכת תיכשל בערב. הוא דאג לצלם שטרות גם בתאורה חלשה, כשהם מקומטים, ועל רקעים שונים." />

        <div className="bg-orange-50 border-r-4 border-orange-500 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <AlertCircle className="w-5 h-5 text-orange-600" />
            <h4 className="font-bold text-orange-800">שימו לב להטיות:</h4>
          </div>
          <p className="text-orange-700">האם המערכת שלכם תעבוד גם לאנשים עם צבע עור שונה? במקומות עם רעש? בתנאי תאורה שונים?</p>
        </div>

        <SuccessTip text="חשבו על 'מקרי קצה'. מה יקרה אם המשתמש יהיה בחושך? מה אם יהיה רעש רקע חזק? ככל שתחשבו על זה עכשיו, המודל שלכם יהיה מקצועי יותר." />

        <FormPoints points={[
          "זיהוי 3 סוגי הטיות אפשריות במידע",
          "איך תצמצמו את ההטיות הללו?",
          "האם יש פגיעה בפרטיות או בזכויות יוצרים?",
          "השפעות חברתיות חיוביות ושליליות"
        ]} />

        <MentorQuestion text="מה יכול לגרום למערכת שלכם 'לטעות' בגלל שלא הבאתם לה מספיק דוגמאות מגוונות?" />

        <FormEmbed id="1HxTtbN9uAviP2_HhsAk0DSEc_yPPX8cWD14OIWqc9Nc" title="טופס ניתוח הטיות ואתיקה" />
      </div>
    )
  },
  {
    title: "שלב 5: תכנון עבודה",
    icon: ListChecks,
    iconClass: 'text-blue-500',
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 text-lg">
          איך נחלק את הזמן שלנו? מי עושה מה? בואו נבנה לוח זמנים ריאלי.
        </p>
        
        <ValeryExample text="ולרי קבע שבוע ראשון לאיסוף 500 תמונות, שבוע שני לאימון המודל ב-Teachable Machine, ושבוע שלישי לכתיבת קוד הפייתון שמקריא את התוצאה." />

        <SuccessTip text="חלקו את העבודה כך שכולם יהיו מעורבים. למשל: אחד אחראי על איסוף נתונים, אחד על אימון המודל, ואחד על כתיבת התיעוד. עבדו בצוות!" />

        <FormPoints points={[
          "פירוט שלבי העבודה",
          "חלוקת תפקידים בתוך הצוות",
          "הערכת זמן לכל שלב",
          "הגדרת 'נקודות בדיקה' להצלחה"
        ]} />

        <MentorQuestion text="איזו משימה נראית לכם הכי מאתגרת? כמה זמן כדאי להקדיש לה?" />

        <FormEmbed id="1FSyHMTep_TiqDJP95aP_f-DFN42qRnuhzmrMoeroAeA" title="טופס תכנון עבודה" />
      </div>
    )
  },
  {
    title: "שלב 6: נתונים ודיוק המודל",
    icon: Database,
    iconClass: 'text-purple-500',
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 text-lg">
          זה הזמן לאמן! נשתמש ב-Teachable Machine. זכרו את חוק ה-80/20: 80% לאימון ו-20% לבדיקה.
        </p>

        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 flex flex-col items-center gap-4">
          <div className="text-center">
            <h4 className="font-bold text-purple-900 mb-1">כלי האימון המרכזי:</h4>
            <p className="text-purple-800 text-sm">כאן תעלו את התמונות או הקולות ותאמנו את המוח של המערכת שלכם.</p>
          </div>
          <a 
            href="https://teachablemachine.withgoogle.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition shadow-lg flex items-center gap-2"
          >
            כניסה ל-Teachable Machine
            <Brain className="w-5 h-5" />
          </a>
        </div>
        
        <Mekhavan items={[
          { label: "איסוף, ניקוי והכנה נכונה של הנתונים", weight: "20%" },
          { label: "שימוש נכון ב-Teachable Machine ואימון המודל", weight: "30%" },
          { label: "חישוב דיוק המודל על בסיס נתוני בדיקה", weight: "50%" }
        ]} />

        <ValeryExample text="ולרי אסף 100 תמונות לכל שטר. הוא אימן את המודל על 80 תמונות, ואז בדק אותו על 20 התמונות ששמר בצד. הוא קיבל דיוק של 90%!" />

        <SuccessTip text="אם המודל לא מדויק, אל תתייאשו! בדקו באילו תמונות הוא טועה. אולי הרקע שם דומה מדי? אולי התאורה שונה? הוסיפו עוד תמונות דומות לאלו שהוא טעה בהן." />

        <div className="bg-purple-50 border-r-4 border-purple-500 p-4 rounded-lg">
          <h4 className="font-bold text-purple-800 mb-1">איך מחשבים דיוק?</h4>
          <p className="text-purple-700">מספר זיהויים נכונים חלקי סך כל הבדיקות (כפול 100).</p>
        </div>

        <FormPoints points={[
          "הצגת 2-3 דוגמאות מכל קטגוריה",
          "תיאור תהליך ניקוי הנתונים",
          "דיווח על רמת הדיוק שהתקבלה",
          "תיעוד ניסיונות השיפור (יומן מסע)"
        ]} />

        <MentorQuestion text="אם המודל שלכם טועה ב-20% מהמקרים, האם זה בטוח להשתמש בו? איך אפשר לשפר אותו?" />

        <FormEmbed id="10cr8M6u_pjjxUMW_cv11au5KbO3CCFgqEzGm_k_h-AQ" title="טופס נתונים ודיוק" />
      </div>
    )
  },
  {
    title: "שלב 7: קוד המערכת (פייתון)",
    icon: Code,
    iconClass: 'text-green-600',
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 text-lg">
          עכשיו מחברים הכל! נכתוב קוד פייתון שישתמש במודל שאימנתם ויבצע פעולה (כמו להשמיע קול או להדליק נורה).
        </p>

        <div className="bg-green-50 p-6 rounded-xl border border-green-100 flex flex-col items-center gap-4 my-6">
          <div className="text-center">
            <h4 className="font-bold text-green-900 mb-1">סביבת העבודה המומלצת:</h4>
            <p className="text-green-800 text-sm">נשתמש ב-Google Colab כדי להריץ את קוד הפייתון שלנו בענן ללא צורך בהתקנות.</p>
          </div>
          <a 
            href="https://colab.research.google.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition shadow-lg flex items-center gap-2"
          >
            פתיחת Google Colab
            <Code className="w-5 h-5" />
          </a>
        </div>
        
        <ValeryExample text={(
          <span>
            ולרי כתב קוד שמשתמש בספריית <code>pyttsx3</code>. בכל פעם שהמודל מזהה '20_NIS', המחשב אומר בקול רם: 'עשרים שקלים'.
          </span>
        )} />

        <div className="space-y-6 my-8">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-500" />
              חיבור המודל מהדרייב (Mount Drive)
            </h4>
            <div className="space-y-4 text-sm text-gray-700">
              <p>כדי שהקוד יוכל לגשת למודל ששמרתם, עליכם לבצע "חיבור" (Mount) של הדרייב שלכם למחברת ה-Colab:</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-xl text-left font-mono text-xs overflow-x-auto" dir="ltr">
                from google.colab import drive<br/>
                drive.mount('/content/drive')
              </div>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>איתור המסלול:</strong> לאחר החיבור, לחצו על סמליל התיקייה בצד ימין ב-Colab.</li>
                <li><strong>העתקת נתיב:</strong> מצאו את תיקיית המודל שלכם, לחצו על 3 הנקודות ובחרו <code>Copy path</code>.</li>
                <li><strong>עדכון בקוד:</strong> הדביקו את הנתיב שהעתקתם בתוך המשתנים <code>model_path</code>, <code>labels_path</code> ו-<code>image_path</code>.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-500" />
              איך הקוד מתחבר למודל? (הסבר שורה-שורה)
            </h4>
            <div className="space-y-4">
              <div className="bg-gray-900 text-gray-100 p-4 rounded-xl text-left font-mono text-xs overflow-x-auto" dir="ltr">
                <div className="opacity-50"># ייבוא הספריות הנדרשות</div>
                <div>import tensorflow as tf</div>
                <div>import numpy as np</div>
                <div className="mt-2 opacity-50"># טעינת המודל מהדרייב</div>
                <div>model = tf.keras.layers.TFSMLayer(model_path, call_endpoint="serving_default")</div>
                <div className="mt-2 opacity-50"># ביצוע הניבוי על התמונה</div>
                <div>predictions = model(image)</div>
                <div className="mt-2 opacity-50"># מציאת הקטגוריה עם הציון הגבוה ביותר</div>
                <div>predicted_class_idx = tf.argmax(predictions["sequential_3"][0]).numpy()</div>
              </div>
              
              <div className="bg-amber-50 border-r-4 border-amber-400 p-3 text-xs text-amber-800 mb-4">
                <strong>מה זה sequential_3?</strong> זהו השם הפנימי של שכבת הפלט במודל. השם עשוי להשתנות (למשל ל-<code>dense_2</code>). 
                <br/><strong>אם הקוד נכשל:</strong> הוסיפו שורה <code>print(predictions)</code> לפני שורת ה-argmax כדי לראות מהו השם הנכון במודל שלכם.
              </div>

              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><strong>import tensorflow:</strong> ייבוא ה"מנוע" של הבינה המלאכותית.</li>
                <li className="flex gap-2"><strong>TFSMLayer:</strong> השורה שטוענת את ה"מוח" (המודל) שאימנתם לתוך התכנית.</li>
                <li className="flex gap-2"><strong>model(image):</strong> כאן המחשב באמת "מסתכל" על התמונה ומנתח אותה.</li>
                <li className="flex gap-2"><strong>tf.argmax:</strong> פקודה שמוצאת איזו קטגוריה קיבלה את הציון הכי גבוה (הניבוי).</li>
              </ul>
            </div>
          </div>

          <div className="bg-indigo-50 p-5 rounded-2xl border border-indigo-100 shadow-sm">
            <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-indigo-600" />
              שילוב Gemini API (הסבר שורה-שורה)
            </h4>
            <div className="space-y-4">
              <div className="bg-gray-900 text-gray-100 p-4 rounded-xl text-left font-mono text-xs overflow-x-auto" dir="ltr">
                <div>import google.generativeai as genai</div>
                <div>genai.configure(api_key="YOUR_API_KEY")</div>
                <div>model = genai.GenerativeModel("gemini-1.5-flash")</div>
                <div>response = model.generate_content("ספר בדיחה על " + result)</div>
                <div>print(response.text)</div>
              </div>

              <ul className="space-y-2 text-sm text-indigo-800">
                <li className="flex gap-2"><strong>import google.generativeai:</strong> ייבוא הספרייה שמאפשרת לדבר עם Gemini.</li>
                <li className="flex gap-2"><strong>genai.configure:</strong> הגדרת המפתח הסודי (API Key) שקיבלתם מהמורה.</li>
                <li className="flex gap-2"><strong>GenerativeModel:</strong> בחירת המודל החכם שבו נשתמש (1.5-flash).</li>
                <li className="flex gap-2"><strong>generate_content:</strong> שליחת הבקשה ל-Gemini וקבלת התשובה החכמה.</li>
              </ul>
            </div>
          </div>
        </div>

        <SuccessTip text="השתמשו בקוד הבסיס שהמורה נתנה לכם. אל תנסו לכתוב הכל מאפס. התמקדו בשינוי התנאים (if/else) כך שיתאימו למחלקות שלכם." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-red-50 border-r-4 border-red-400 p-4 rounded-lg">
            <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              איך בודקים ומתקנים?
            </h4>
            <ul className="text-sm text-red-700 space-y-2">
              <li><strong>הריצו את הקוד:</strong> בדקו אם המצלמה נפתחת והאם המחשב מדפיס את הזיהוי הנכון.</li>
              <li><strong>קראו את השגיאות:</strong> אם הקוד קורס, חפשו את הטקסט האדום בסוף. הוא בדרך כלל אומר בדיוק מה חסר (למשל ספריה שלא הותקנה).</li>
              <li><strong>השתמשו ב-Print:</strong> הוסיפו <code>print(prediction)</code> כדי לראות מה המודל 'חושב' בכל רגע.</li>
            </ul>
          </div>

          <div className="bg-indigo-50 border-r-4 border-indigo-400 p-4 rounded-lg">
            <h4 className="font-bold text-indigo-800 mb-2 flex items-center gap-2">
              <Brain className="w-4 h-4" />
              רוצים להוסיף הרחבות?
            </h4>
            <p className="text-sm text-indigo-700 mb-2">ניתן להיעזר בבינה מלאכותית (Gemini/ChatGPT) כדי לקבל <strong>הסברים והנחיות</strong> איך להוסיף יכולות:</p>
            <ul className="text-sm text-indigo-700 space-y-2">
              <li><strong>שמע:</strong> בקשו מה-AI: "הסבר לי איך להוסיף קוד פייתון שמנגן קובץ mp3 כשהמודל מזהה 'כלב' ומה עלי להתקין".</li>
              <li><strong>אפליקציה לסלולרי:</strong> שאלו: "מהן האפשרויות להפוך קוד פייתון לאפליקציה פשוטה? הסבר לי את ההבדל בין Kivy ל-Streamlit".</li>
              <li><strong>למידה פעילה:</strong> בקשו מהבינה להסביר לכם את ההיגיון מאחורי הקוד החדש כדי שתוכלו להבין אותו בעצמכם.</li>
            </ul>
          </div>
        </div>

        <FormPoints points={[
          "קישור לקוד ב-Colab או העלאת קובץ",
          "הסבר על הלוגיקה של הקוד",
          "איך הקוד משתמש בתוצאות המודל?",
          "תיעוד פונקציות מרכזיות"
        ]} />

        <MentorQuestion text="איך הקוד שלכם עוזר למשתמש להבין מה המודל זיהה? האם זה נוח לשימוש?" />

        <FormEmbed id="1YD2RxhTiM3uO2o7mVX7UZ2-yOCRpt54KHdYBXyQrG_A" title="טופס קוד המערכת" />
      </div>
    )
  },
  {
    title: "שלב 8: רפלקציה",
    icon: RefreshCw,
    iconClass: 'text-teal-500',
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 text-lg">
          מה למדנו? מה היה קשה? מה היינו עושים אחרת? רפלקציה עוזרת לנו להשתפר כמתכנתים וכמדענים.
        </p>
        
        <Mekhavan items={[
          { label: "זיהוי סיבות לכשלונות ומידת אמון במודל", weight: "50%" },
          { label: "זיהוי סוגיות אתיות רלוונטיות", weight: "20%" },
          { label: "תיאור השימוש בכלי AI בתהליך", weight: "10%" },
          { label: "דיווח על אתגרים ועבודת הצוות", weight: "20%" }
        ]} />

        <ValeryExample text="ולרי שיתף שהיה לו קשה מאוד לאסוף תמונות של שטרות מקומטים, אבל הוא גילה שזה הדבר הכי חשוב כדי שהמערכת תעבוד במציאות." />

        <SuccessTip text="תהיו כנים! מותר להגיד שמשהו לא עבד או שהיה קשה. זה חלק מהלמידה האמיתית. המורה מעריכה את היכולת שלכם לנתח את הטעויות שלכם." />

        <FormPoints points={[
          "האם המערכת באמת פותרת את הבעיה?",
          "באילו מקרים המודל טועה?",
          "באיזה כלי AI השתמשתם ואיך הוא עזר?",
          "2-3 אתגרים גדולים שנתקלתם בהם"
        ]} />

        <MentorQuestion text="מהו הרגע שבו הרגשתם הכי גאים בפרויקט שלכם?" />

        <FormEmbed id="1pJif_KPqve9Odnea8pq9ntgG7Ww-53ZvrHtb-v0Ilww" title="טופס רפלקציה" />
      </div>
    )
  },
  {
    title: "שלב 9: הצגת הפרויקט",
    icon: Presentation,
    iconClass: 'text-pink-500',
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 text-lg">
          הגיע הזמן להראות לעולם מה בניתם! הכינו מצגת או סרטון שמסבירים את התהליך ואת התוצאה.
        </p>
        
        <Mekhavan items={[
          { label: "הבעיה והפתרון מוצגים בצורה ברורה", weight: "33%" },
          { label: "הסבר על הקשר בין הנתונים לביצועי המודל", weight: "33%" },
          { label: "הצגת תהליך העבודה והצוות", weight: "34%" }
        ]} />

        <ValeryExample text="ולרי צילם סרטון קצר שבו הוא עוצם עיניים, מציג שטר למצלמה, והמחשב אומר לו 'חמישים שקלים'. זה היה מרשים מאוד!" />

        <SuccessTip text="סרטון הדגמה שווה אלף מילים! צלמו את המערכת עובדת 'בשידור חי'. זה תמיד מרשים יותר מרק לדבר על זה." />

        <FormPoints points={[
          "קישור למצגת או לסרטון ההדגמה",
          "תיאור קצר של מה שרואים בהצגה",
          "חלוקת הצגה בין חברי הצוות"
        ]} />

        <MentorQuestion text="מהו הדבר האחד שאתם רוצים שאנשים יזכרו מהפרויקט שלכם?" />

        <FormEmbed id="1va4MrYCgz8o23LTb69RcdidiuTBoXMuAPNgwMD7ucdk" title="טופס הצגת הפרויקט" />
      </div>
    )
  },
  {
    title: "שלב 10: הגשה סופית",
    icon: Send,
    iconClass: 'text-green-700',
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 text-lg font-bold">
          מזל טוב! סיימתם את הפרויקט. עכשיו נארגן הכל לשליחה למשרד החינוך.
        </p>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-6">
          <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
            <UploadCloud className="w-6 h-6" />
            הנחיות להעתקת תבניות המסמכים:
          </h4>
          <p className="text-blue-800 mb-4">
            לפניכם תיקיית התבניות. עליכם להעתיק את התיקייה ל-Drive של אחד מחברי הצוות כדי שתוכלו למלא אותה.
            <strong> שימו לב:</strong> מומלץ למלא את המסמכים על בסיס התשובות שכבר הגשתם בטפסים לאורך כל הדרך.
          </p>
          <div className="flex flex-col gap-3">
            <a 
              href="https://drive.google.com/drive/folders/1ZWc4ZLEjcC6yULNB5hx1_0c8OcEbZI_6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-md"
            >
              לתיקיית תבניות המסמכים להעתקה
              <Send className="w-5 h-5" />
            </a>
            <div className="bg-white/50 p-3 rounded-lg text-sm text-blue-900">
              <strong>איך מעתיקים?</strong> היכנסו לקישור, לחצו על שם התיקייה למעלה ובחרו באפשרות "צור עותק" (Make a copy) או הורידו והעלו ל-Drive שלכם.
            </div>
          </div>
        </div>
        
        <div className="bg-white border-2 border-indigo-200 p-6 rounded-xl shadow-sm">
          <h4 className="font-bold text-indigo-900 mb-4 flex items-center gap-2">
            <ListChecks className="w-6 h-6" />
            צ'ק ליסט לארגון החומרים (לפי הנחיות משרד החינוך):
          </h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <div className="bg-indigo-100 text-indigo-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
              <span><strong>קובץ המודל:</strong> קובץ ה-<code>.h5</code> או הקישור לייצוא מה-Teachable Machine.</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-indigo-100 text-indigo-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
              <span><strong>קוד הפייתון:</strong> קובץ ה-<code>.py</code> שלכם, נקי ומתועד עם הערות.</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-indigo-100 text-indigo-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
              <span><strong>תיקיית נתונים:</strong> דוגמאות מה-Dataset (תמונות/קולות) ששימשו לאימון.</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-indigo-100 text-indigo-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</div>
              <div className="flex flex-col">
                <span><strong>מסמכי תיעוד (PDF):</strong> יש להגיש 3 מסמכים נפרדים המבוססים על התבניות:</span>
                <ul className="list-disc list-inside mr-4 mt-1 text-sm">
                  <li>מסמך הגדרת פרויקט</li>
                  <li>מסמך תכנון פרויקט</li>
                  <li>מסמך יישום והערכת ביצועים</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-indigo-100 text-indigo-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">5</div>
              <span><strong>סרטון הדגמה:</strong> סרטון קצר המראה את המערכת עובדת 'בשידור חי'.</span>
            </li>
          </ul>
          <p className="mt-6 text-sm text-gray-500 italic">
            * מומלץ לארוז הכל בקובץ ZIP אחד מסודר עם שמות הקבוצה שלכם.
          </p>
        </div>

        <ValeryExample text="ולרי ארגן את כל הקבצים בתיקייה שקרא לה 'Valery_Banknote_Project'. הוא וידא שהקוד שלו עובד גם במחשב אחר לפני ששלח." />

        <FormPoints points={[
          "קישור לקובץ ה-ZIP הסופי",
          "אישור שכל חברי הצוות מופיעים בהגשה",
          "הצהרה על מקוריות העבודה"
        ]} />

        <MentorQuestion text="האם וידאתם שכל הקבצים שלכם נמצאים בתיקייה אחת מסודרת לפני ששלחתם?" />

        <FormEmbed id="1cGAKF8-D0hu8PPraigOYEa3vsWECCcPDh6WvyXtEo4s" title="טופס הגשה סופית" />

        <div className="text-center py-8">
          <Smile className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800">גאים בכם מאוד! בהצלחה!</h3>
        </div>
      </div>
    )
  }
];
