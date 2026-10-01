const QUESTIONS = {
  "🧊 Rompehielos": [
    "Si pudieras tener cualquier animal como mascota, ¿cuál elegirías?",
    "¿Qué tres cosas te llevarías a una isla desierta?",
    "Si pudieras tener un superpoder durante un día, ¿cuál sería?",
    "¿Qué comida podrías repetir muchas veces sin cansarte?",
    "Si hoy no hubiera clase, ¿qué te apetecería hacer?",
    "¿Qué emoji utilizas más?",
    "¿Prefieres madrugar o acostarte tarde?",
    "Si pudieras aprender una habilidad al instante, ¿cuál sería?",
    "¿Qué estación del año te gusta más y por qué?",
    "¿Qué pequeña cosa suele alegrarte el día?"
  ],
  "🎮 Gustos y aficiones": [
    "¿Qué actividad hace que se te pase el tiempo volando?",
    "¿Qué deporte, juego o afición te gusta practicar?",
    "¿Qué videojuego o juego de mesa recomendarías a la clase?",
    "¿Qué tipo de música escuchas más?",
    "¿Qué canción te pone de buen humor?",
    "¿Qué película o serie recomendarías?",
    "¿Hay algún libro, cómic o manga que te haya gustado mucho?",
    "¿Prefieres crear cosas, competir, investigar o resolver problemas?",
    "¿Qué aplicación utilizas para entretenerte y por qué?",
    "¿Qué afición te gustaría probar algún día?",
    "¿Qué se te da especialmente bien fuera del instituto?",
    "¿Qué plan te parece perfecto para un fin de semana?"
  ],
  "🏫 Nosotros y la clase": [
    "¿Qué hace que una clase sea agradable para ti?",
    "¿Qué cualidad valoras más en un compañero o compañera?",
    "¿Qué puedes aportar tú para que haya buen ambiente en clase?",
    "¿Prefieres trabajar individualmente, en pareja o en equipo? ¿Por qué?",
    "¿Qué norma de convivencia consideras imprescindible?",
    "¿Qué te ayuda a participar cuando trabajas en grupo?",
    "¿Cómo sería para ti un buen delegado o delegada?",
    "¿Qué actividad de tutoría te gustaría hacer este curso?",
    "¿Qué podemos hacer para que nadie se quede fuera de un grupo?",
    "¿Qué gesto sencillo de un compañero puede mejorar un mal día?",
    "¿Qué característica debería tener un buen equipo?",
    "Si la clase tuviera un lema, ¿qué idea debería transmitir?"
  ],
  "🌟 Así soy yo": [
    "Di una cualidad tuya de la que te sientas orgulloso o orgullosa.",
    "¿Eres más de planificar o de improvisar?",
    "¿Te consideras más creativo/a, práctico/a, curioso/a o aventurero/a? ¿Por qué?",
    "¿Qué habilidad te gustaría mejorar este curso?",
    "¿Qué tipo de retos disfrutas más?",
    "¿Qué haces cuando algo no te sale a la primera?",
    "¿Qué valoras más: creatividad, esfuerzo, sentido del humor, sinceridad o compañerismo?",
    "¿Qué cosa nueva has aprendido recientemente por tu cuenta?",
    "¿En qué tipo de actividad te gusta ayudar a otras personas?",
    "¿Qué palabra positiva crees que te describe mejor?"
  ],
  "🌍 Lugares y experiencias": [
    "Si pudieras viajar mañana a cualquier lugar, ¿dónde irías?",
    "¿Prefieres playa, montaña, ciudad o campo?",
    "¿Qué lugar que hayas visitado recomendarías?",
    "¿Qué país o cultura te gustaría conocer mejor?",
    "¿Qué comida de otro lugar te gustaría probar?",
    "¿Prefieres viajar con todo organizado o improvisar sobre la marcha?",
    "Si pudieras vivir una semana en otra época histórica, ¿cuál elegirías?",
    "¿Qué lugar de Andalucía enseñarías a alguien que viene por primera vez?",
    "¿Qué aventura te gustaría vivir alguna vez?",
    "¿Prefieres descubrir sitios nuevos o volver a tus lugares favoritos?"
  ],
  "🚀 Futuro y sueños": [
    "¿Qué te gustaría saber hacer muy bien dentro de cinco años?",
    "¿Qué invento te gustaría que existiera?",
    "¿Qué profesión te parece interesante, aunque no sepas si te dedicarías a ella?",
    "¿Qué problema del mundo te gustaría ayudar a solucionar?",
    "¿Qué tecnología crees que cambiará más nuestras vidas?",
    "Si pudieras crear una asignatura nueva, ¿cómo sería?",
    "¿Qué lugar te gustaría visitar antes de cumplir 25 años?",
    "¿Qué proyecto te gustaría ser capaz de crear algún día?",
    "¿Qué consejo crees que tu yo del futuro te daría ahora?",
    "¿Qué te gustaría haber aprendido cuando termine este curso?"
  ],
  "⚡ ¿Qué prefieres?": [
    "¿Qué prefieres: poder volar o poder teletransportarte?",
    "¿Qué prefieres: no tener deberes durante un mes o no tener exámenes durante un mes?",
    "¿Qué prefieres: viajar al pasado o al futuro?",
    "¿Qué prefieres: vivir junto al mar o en la montaña?",
    "¿Qué prefieres: tener muchísimo tiempo libre o dominar cualquier habilidad rápidamente?",
    "¿Qué prefieres: película en casa o cine con amigos?",
    "¿Qué prefieres: videojuego cooperativo o competitivo?",
    "¿Qué prefieres: conocer todos los idiomas o saber tocar todos los instrumentos?",
    "¿Qué prefieres: explorar el espacio o el fondo del océano?",
    "¿Qué prefieres: una semana sin móvil o una semana sin televisión, series y videojuegos?",
    "¿Qué prefieres: trabajar en un proyecto que tú elijas o superar un reto sorpresa?",
    "¿Qué prefieres: ser muy bueno improvisando o muy bueno organizando?"
  ],
  "🤝 Relaciones entre compañeros": [
    "¿Qué hace que te sientas cómodo o cómoda con tus compañeros de clase?",
    "¿Crees que en clase nos conocemos bien entre todos? ¿Qué podríamos hacer para conocernos mejor?",
    "¿Qué cualidad valoras especialmente en un compañero o compañera?",
    "¿Qué ayuda a que una persona nueva se integre en un grupo?",
    "¿Qué podemos hacer cuando vemos que alguien se queda solo o fuera de una actividad?",
    "¿Qué diferencia hay para ti entre una broma y una falta de respeto?",
    "¿Te resulta fácil pedir ayuda a un compañero cuando no entiendes algo?",
    "¿Qué hace que un grupo de trabajo funcione bien?",
    "¿Cómo podemos evitar que siempre trabajen juntas las mismas personas?",
    "¿Qué comportamiento entre compañeros mejora el ambiente de clase?",
    "¿Qué comportamiento entre compañeros suele empeorar el ambiente de clase?",
    "¿Cómo podemos resolver mejor un desacuerdo entre compañeros?",
    "¿Crees que escuchamos suficientemente las opiniones de los demás?",
    "¿Qué podríamos hacer como grupo para que todos puedan participar?",
    "¿En qué momentos notas más compañerismo en la clase?"
  ],
  "📚 Asignaturas y aprendizaje": [
    "¿En qué asignaturas te resulta más fácil participar en clase? ¿Por qué?",
    "¿Qué asignaturas te están resultando más interesantes este curso?",
    "¿Hay alguna asignatura que este año te esté gustando más de lo que esperabas?",
    "¿Qué materia te resulta más difícil de seguir y qué crees que te ayudaría?",
    "¿En qué asignaturas aprendes mejor haciendo actividades prácticas?",
    "¿En cuáles te ayudan especialmente los ejemplos antes de empezar una tarea?",
    "¿Prefieres aprender escuchando una explicación, practicando, investigando o trabajando con otros?",
    "¿Qué tipo de actividad hace que entiendas mejor un tema?",
    "¿Te resulta claro normalmente qué tienes que hacer en las tareas?",
    "¿Sabes normalmente qué se va a evaluar en un trabajo o actividad?",
    "¿Qué te ayuda más a preparar un examen?",
    "¿Qué suele hacer que pierdas la atención durante una clase?",
    "¿En qué momentos te cuesta más preguntar una duda?",
    "¿Qué podría ayudarte a organizar mejor las tareas de distintas asignaturas?",
    "¿Hay alguna forma de trabajar que te gustaría utilizar más en el instituto?",
    "¿Qué actividad o proyecto realizado en alguna asignatura recuerdas especialmente? ¿Por qué?"
  ],
  "👩‍🏫 Relación con el profesorado": [
    "¿Qué hace un profesor o profesora para que te resulte fácil preguntar una duda?",
    "¿Qué características hacen que una explicación sea fácil de entender?",
    "¿Te resulta fácil decir que no has entendido algo? ¿Qué podría facilitarlo?",
    "¿Qué tipo de ayuda del profesorado te resulta más útil cuando algo te cuesta?",
    "¿Qué hace que te sientas escuchado o escuchada por un profesor?",
    "¿Qué puede hacer el alumnado para mejorar la comunicación con el profesorado?",
    "¿Qué puede hacer el profesorado para favorecer que participe más gente?",
    "¿Cómo prefieres recibir indicaciones cuando tienes que corregir o mejorar un trabajo?",
    "¿Te ayuda conocer ejemplos de trabajos bien realizados antes de empezar?",
    "¿Qué debería ocurrir en clase para que preguntar una duda nunca dé vergüenza?",
    "¿Qué valoras más de un profesor: claridad, paciencia, organización, cercanía, sentido del humor u otra cosa? ¿Por qué?",
    "¿Crees que existe suficiente comunicación entre alumnado y profesorado? ¿Cómo podría mejorar?",
    "Cuando una clase no entiende algo, ¿cuál crees que es la mejor forma de comunicarlo?",
    "¿Qué cosas hacen que confíes en poder hablar con un profesor si tienes un problema académico?"
  ],
  "📝 Tareas, exámenes y organización": [
    "¿Sientes que puedes organizar bien las tareas de todas las asignaturas?",
    "¿Qué es lo que más te cuesta al organizar el estudio durante la semana?",
    "¿Te resulta fácil saber qué tareas tienes pendientes?",
    "¿Qué sistema utilizas para recordar exámenes, trabajos y entregas?",
    "¿Qué te ayudaría a evitar que se acumulen trabajos y exámenes?",
    "¿Prefieres varios trabajos pequeños o un proyecto más largo? ¿Por qué?",
    "¿Cuánto tiempo de antelación consideras útil para preparar un examen?",
    "¿Qué tipo de corrección te ayuda más a aprender de tus errores?",
    "Después de un examen o trabajo, ¿sueles entender qué puedes mejorar?",
    "¿Qué podríamos hacer en tutoría para mejorar la organización y el estudio?",
    "¿Trabajas mejor con instrucciones paso a paso o teniendo más libertad para organizarte?",
    "¿Qué hábito de estudio te gustaría mejorar este trimestre?"
  ],
  "🌱 Ambiente de clase y mejoras": [
    "¿Qué es lo que mejor funciona actualmente en nuestra clase?",
    "¿Qué aspecto del grupo crees que podríamos mejorar entre todos?",
    "¿En qué momentos hay mejor ambiente en clase?",
    "¿Qué situaciones hacen que sea más difícil trabajar o concentrarse?",
    "¿Crees que respetamos suficientemente los turnos de palabra?",
    "¿Qué podríamos hacer para empezar las clases más preparados y perder menos tiempo?",
    "¿Cómo podemos conseguir que se escuchen también las personas que hablan menos?",
    "¿Qué norma o acuerdo de clase está funcionando bien?",
    "¿Hay alguna norma o rutina que podríamos explicar o aplicar mejor?",
    "Si pudieras proponer una mejora sencilla para la clase desde mañana, ¿cuál sería?",
    "¿Qué actividad podría ayudarnos a trabajar mejor como grupo?",
    "¿Qué podemos hacer para reducir interrupciones sin que el ambiente deje de ser agradable?",
    "¿Qué responsabilidad debería asumir cada alumno para que la clase funcione mejor?",
    "¿Qué objetivo realista podríamos marcarnos como grupo para este trimestre?",
    "¿Cómo sabríamos dentro de un mes que el ambiente de clase ha mejorado?"
  ],
  "💬 Tutoría y bienestar en el instituto": [
    "¿Qué temas te gustaría que tratáramos durante las horas de tutoría?",
    "¿Qué actividad de tutoría crees que sería realmente útil para vuestro curso?",
    "¿Te resulta fácil pedir ayuda en el instituto cuando tienes un problema?",
    "¿Sabes a quién acudir en el centro si necesitas ayuda con un problema académico o de convivencia?",
    "¿Qué podría hacer la tutoría para ayudaros a organizar mejor el curso?",
    "¿Qué preocupación habitual del alumnado de 3.º ESO crees que merece hablarse en tutoría?",
    "¿Qué podemos hacer para que la tutoría sea un espacio donde participe todo el grupo?",
    "¿Qué tema relacionado con internet, redes sociales o convivencia digital te gustaría tratar?",
    "¿Qué habilidad para la vida diaria te gustaría trabajar en tutoría?",
    "¿Hay alguna actividad para mejorar la convivencia que te gustaría probar?",
    "¿Qué te gustaría que el tutor conociera mejor sobre las necesidades generales de vuestra clase?",
    "Al terminar este trimestre, ¿qué te gustaría que hubiera mejorado en el grupo?"
  ],
  "😂 Imaginación y humor": [
    "Si fueras un personaje de un videojuego, ¿qué habilidad especial tendrías?",
    "Si pudieras cambiar el sonido del timbre del instituto, ¿qué pondrías?",
    "Si nuestra clase fuera una película, ¿qué género sería?",
    "Si pudieras inventar un día festivo, ¿qué celebraríamos?",
    "Si fueras profesor o profesora por un día, ¿qué actividad propondrías?",
    "Si pudieras ponerle otro nombre al instituto por un día, ¿cuál sería?",
    "Si un robot viniera mañana a clase, ¿qué tarea le encargarías?",
    "Si pudieras diseñar el aula perfecta, ¿qué tendría?",
    "Si tuvieras que sobrevivir a un apocalipsis zombi con una habilidad, ¿cuál elegirías?",
    "Si la clase tuviera una mascota, ¿qué animal sería y cómo se llamaría?"
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  initialize(QUESTIONS);
});

function initialize(questions) {
  const topicSelector = document.getElementById('topicSelector');
  const newQuestionButton = document.getElementById('newQuestionButton');
  const topics = Object.keys(questions);
  const totalQuestions = topics.reduce((sum, topic) => sum + questions[topic].length, 0);
  const questionCount = document.getElementById('questionCount');
  if (questionCount) questionCount.textContent = `✅ ${totalQuestions} preguntas cargadas · Pulsa ESPACIO para cambiar`;
  let currentTopic = topics[0];
  let lastIndex = -1;

  topics.forEach(topic => {
    const option = document.createElement('option');
    option.value = topic;
    option.textContent = topic;
    topicSelector.appendChild(option);
  });

  function showQuestion() {
    const list = questions[currentTopic];
    let index = Math.floor(Math.random() * list.length);
    if (list.length > 1) {
      while (index === lastIndex) index = Math.floor(Math.random() * list.length);
    }
    lastIndex = index;
    document.getElementById('questionText').textContent = list[index];
  }

  topicSelector.addEventListener('change', function () {
    currentTopic = this.value;
    lastIndex = -1;
    showQuestion();
  });

  newQuestionButton.addEventListener('click', showQuestion);
  document.addEventListener('keydown', event => {
    if (event.code === 'Space' && event.target.tagName !== 'SELECT') {
      event.preventDefault();
      showQuestion();
    }
  });

  showQuestion();
}
