export const silData = [
    {
        id: "peligros-y-riesgos",
        title: "1. Peligros y Riesgos",
        questions: ["que es riesgo", "definicion riesgo", "aceptabilidad riesgo", "riesgo residual"],
        shortAnswer: "<strong>Riesgo</strong> = Probabilidad de suceso peligroso × Alcance de los daños.",
        content: `
      <h3>Introducción</h3>
      <p>Estamos constantemente expuestos a una gran variedad de riesgos en nuestra vida diaria. Una parte considerable de estos riesgos comprende grandes desastres, lesiones graves o daños que pueden afectar a la salud de las personas, al medio ambiente y a bienes y propiedades. No siempre pueden eliminarse los peligros y los riesgos asociados.</p>
      
      <p>La sociedad tiene que vivir por tanto bajo la amenaza inevitable de terremotos, inundaciones y otros desastres. Mientras la protección contra estos sucesos solo puede ser limitada, las medidas de protección contra las repercusiones nefastas de estos sucesos sí pueden considerarse muy detalladamente.</p>
      
      <h3>Marco Legal y Normativo</h3>
      <p>En muchos lugares, los legisladores han creado leyes y otras normativas legales que definen los requisitos correspondientes en materia de seguridad. En Europa, la Comisión Europea ha publicado la directiva correspondiente para la protección de la población y el medio ambiente.</p>
      
      <h3>Definición de Riesgo</h3>
      <div class="highlight-box">
        <strong>Riesgo =</strong> la probabilidad de que se produzca un suceso peligroso x alcance de los daños (costos) causados por el suceso peligroso.
      </div>
      
      <h3>Aceptabilidad de Riesgos</h3>
      <p>La aceptabilidad de los riesgos residuales depende de varios factores:</p>
      <ul>
        <li>País o región</li>
        <li>Sociedad</li>
        <li>Leyes</li>
        <li>Costes</li>
      </ul>
      <p>El que un nivel de riesgo residual sea aceptable o no es algo que ha de estimarse en cada caso. Tiene que ser aceptable para la sociedad.</p>
      
      <p><strong>Riesgo Residual:</strong> Es el riesgo que permanece incluso con medidas de protección. El objetivo es reducirlo hasta un nivel "tolerable".</p>
    `
    },
    {
        id: "normas",
        title: "2. Normas de Seguridad Funcional",
        questions: [
            "cuantos niveles de seguridad sil hay",
            "que es la norma iec 61508",
            "que niveles sil existen",
            "normas de seguridad"
        ],
        shortAnswer: "Se definen <strong>4 niveles de seguridad (SIL 1 a SIL 4)</strong>. La norma principal es la IEC/DIN EN 61508.",
        content: `
      <h3>Origen y Contexto</h3>
      <p>El desencadenante de un accidente fue un proceso catalítico que implicó la fuga de gas tóxico en la ciudad de Seveso, en el norte de Italia, en julio de 1976. Desde entonces, la directiva 96/82/EC (Directiva Seveso II) ha establecido disposiciones legales.</p>
      <p>En Alemania, esta directiva se implementó a través de la “norma sobre incidentes peligrosos” en la “Ley federal de control de inmisiones” y la “norma sobre seguridad industrial y salud” (12ª BImSchV y BetrSichV).</p>
      
      <h3>IEC/DIN EN 61508</h3>
      <p>En este contexto, debe distinguirse entre productos seguros en general y productos desarrollados específicamente para funciones relacionadas con la seguridad. En el segundo caso, debe cumplirse la norma <strong>IEC/DIN EN 61508</strong>.</p>
      
      <p>Esta norma exige aplicar consideraciones cuantitativas a todo el sistema y documentar un sistema de gestión de la seguridad funcional. Se pretenden prevenir errores sistemáticos, controlar fallos aleatorios y reducir la probabilidad de fallos peligrosos (riesgos).</p>
      
      <h3>Aplicación de la Norma</h3>
      <p>Los análisis de riesgos pueden utilizarse para detectar todos los riesgos relacionados con un sistema y determinar si se requieren sistemas instrumentados de seguridad (SIS).</p>
      <p>Además de la IEC 61508 (norma base), existen derivadas:</p>
      <ul>
        <li><strong>IEC/DIN EN 61511:</strong> Estándar básico para la industria de procesos.</li>
        <li><strong>DIN EN 62061:</strong> Directiva sobre maquinarias.</li>
        <li><strong>DIN EN 50156:</strong> Tecnología de hornos.</li>
      </ul>

      <h3>Niveles de Seguridad (SIL)</h3>
      <p>La norma define cuatro niveles de seguridad: <strong>SIL 1 a SIL 4</strong>. IEC/DIN EN 61508 es una norma genérica, aplicable a todo tipo de sistemas eléctricos, electrónicos y electrónicos programables (E/E/PES).</p>
    `
    },
    {
        id: "ciclo-de-vida",
        title: "3. Ciclo de Vida",
        questions: ["que es el ciclo de vida", "fases del ciclo de vida", "gestion de seguridad"],
        shortAnswer: "El ciclo de vida abarca desde el análisis de riesgos y diseño hasta la operación, mantenimiento y desmantelamiento.",
        content: `
      <h3>Concepto</h3>
      <p>Los usuarios de sistemas relacionados con la seguridad deben tomar medidas apropiadas para analizar y reducir los riesgos a lo largo de todo el ciclo de vida. La norma IEC/DIN EN 61508 prescribe algunos pasos para ello:</p>
      
      <h3>Fases Principales</h3>
      <ul>
        <li><strong>Análisis:</strong> Definir y analizar riesgos según probabilidades de fallo en informes de demanda.</li>
        <li><strong>Diseño:</strong> Determinar e implementar las medidas (gestión de la seguridad funcional) para todo el lazo (sensor, control, actuador).</li>
        <li><strong>Implementación:</strong> Utilizar equipos apropiados (certificados).</li>
      </ul>
      
      <h3>Estructura del Ciclo</h3>
      <ol>
        <li>Gestión de la seguridad y Especificaciones.</li>
        <li>Planificación e Implementación.</li>
        <li>Requisitos técnicos.</li>
        <li>Instalación y puesta en marcha.</li>
        <li>Causas de errores y Cualificación del personal.</li>
        <li>Operación y mantenimiento.</li>
        <li>Cambios tras la puesta en marcha.</li>
        <li>Retirada del servicio (Desmantelamiento).</li>
      </ol>
    `
    },
    {
        id: "minimizacion-riesgos",
        title: "4. Minimización de Riesgos",
        questions: ["como reducir riesgos", "objetivo iec 61508", "capas de proteccion"],
        shortAnswer: "El riesgo se reduce mediante capas de protección (LOPA) hasta alcanzar un nivel tolerable.",
        content: `
      <h3>Necesidad de Reducción</h3>
      <p>Cada aplicación tecnológica implica riesgos. Cuanto mayor es el riesgo para personas o medio ambiente, más contramedidas han de tomarse. En aplicaciones industriales, los sistemas de protección deben funcionar correctamente para que el sistema permanezca en un estado seguro en caso de error.</p>
      
      <h3>Objetivo de la Norma</h3>
      <p>El objetivo de la norma IEC EN 61508 es impedir o controlar la ocurrencia de errores y limitar la probabilidad de fallos peligrosos. Exige documentar cuantitativamente cualquier riesgo residual.</p>
      
      <h3>Estrategia</h3>
      <p>La reducción de riesgos requerida se consigue por combinación de todas las medidas de protección. El riesgo residual no debe superar el riesgo tolerable. Finalmente, el jefe de planta debe asumir y aceptar los riesgos residuales que queden.</p>
    `
    },
    {
        id: "determinacion-sil",
        title: "5. Determinar el SIL Requerido",
        questions: ["como determinar sil", "que es el grafico de riesgo", "clases de riesgo"],
        shortAnswer: "Se determina analizando la Consecuencia (C), Frecuencia (F), Evitación (P) y Probabilidad (W) en un gráfico de riesgos.",
        content: `
      <h3>Análisis de Riesgos</h3>
      <p>Sistemas distintos presentan riesgos distintos. Las normas definen cuatro niveles SIL que describen las medidas a tomar. Cuanto mayor es el número SIL, mayor es la reducción de riesgos necesaria (la probabilidad media de fallo PFD/PFH debe disminuir en un factor de 10 por cada nivel).</p>
      
      <h3>Parámetros del Gráfico de Riesgos</h3>
      <p>Para determinar el SIL se evalúan los siguientes factores:</p>
      <ul>
        <li><strong>Consecuencias (C):</strong>
            <ul>
                <li>CA: Lesiones leves.</li>
                <li>CB: Lesiones graves irreversibles o muerte de una persona.</li>
                <li>CC: Muerte de varias personas.</li>
                <li>CD: Consecuencias catastróficas.</li>
            </ul>
        </li>
        <li><strong>Frecuencia y Exposición (F):</strong> FA (Raro) a FB (Frecuente).</li>
        <li><strong>Probabilidad de evitar el peligro (P):</strong> PA (Posible) a PB (Apenas posible).</li>
        <li><strong>Probabilidad de ocurrencia no deseada (W):</strong> W1 (Muy pequeña) a W3 (Alta).</li>
      </ul>
      
      <h3>Factores de Cálculo</h3>
      <p>El SIL alcanzado se determina considerando:</p>
      <ul>
        <li>PFD o PFH (Probabilidad de fallo).</li>
        <li>HFT (Tolerancia a fallos hardware).</li>
        <li>SFF (Fracción de fallo seguro).</li>
        <li>Intervalo de prueba (Ti).</li>
        <li>Vida útil.</li>
      </ul>
    `
    },
    {
        id: "modos-operacion",
        title: "6. Modos de Operación",
        questions: ["que es baja demanda", "que es alta demanda", "diferencia pfd pfh"],
        shortAnswer: "<strong>Baja demanda (PFD)</strong>: <=1 vez/año. <strong>Alta demanda (PFH)</strong>: Continua o >1 vez/año.",
        content: `
      <h3>Clasificación</h3>
      <p>Se consideran dos modos de operación distintos al clasificar equipos según SIL:</p>
      
      <h3>Modo de Baja Demanda (Low Demand)</h3>
      <p>Se supone que el sistema de seguridad no se necesita más de una vez al año. Es típico en la industria de procesos.</p>
      <ul>
        <li><strong>Métrica:</strong> PFD (Probability of Failure on Demand).</li>
        <li><strong>Rangos:</strong>
            <ul>
                <li>SIL 4: >= 10^-5 a < 10^-4</li>
                <li>SIL 3: >= 10^-4 a < 10^-3</li>
                <li>SIL 2: >= 10^-3 a < 10^-2</li>
                <li>SIL 1: >= 10^-2 a < 10^-1</li>
            </ul>
        </li>
      </ul>
      
      <h3>Modo de Alta Demanda (High Demand)</h3>
      <p>Se utiliza la función de seguridad constantemente o más de una vez por hora. Típico en maquinaria.</p>
      <ul>
        <li><strong>Métrica:</strong> PFH (Probability of Failure per Hour).</li>
        <li><strong>Rangos:</strong>
            <ul>
                <li>SIL 4: >= 10^-9 a < 10^-8</li>
                <li>SIL 3: >= 10^-8 a < 10^-7</li>
                <li>SIL 2: >= 10^-7 a < 10^-6</li>
                <li>SIL 1: >= 10^-6 a < 10^-5</li>
            </ul>
        </li>
      </ul>
    `
    },
    {
        id: "equipos-sil",
        title: "7. Equipos y Arquitectura",
        questions: ["errores sistematicos", "errores aleatorios", "arquitectura monocanal", "arquitectura bicanal"],
        shortAnswer: "Depende de errores sistemáticos (diseño/software) y aleatorios (hardware). Se usan arquitecturas redundantes (ej. 1oo2) para mejorar SIL.",
        content: `
      <h3>Requisitos del SIS</h3>
      <p>Para alcanzar un nivel SIL, el SIS debe cumplir requisitos para errores sistemáticos (software/diseño) y aleatorios (hardware). El resultado de la evaluación de todo el lazo debe corresponder al SIL requerido.</p>
      
      <h3>Tipos de Error</h3>
      <ul>
        <li><strong>Errores Aleatorios:</strong> Fallos en hardware durante funcionamiento. Se calculan (PFD).</li>
        <li><strong>Errores Sistemáticos:</strong> Fallos en diseño o software. Si un software es SIL 3, todo el sistema debe diseñarse para SIL 3.</li>
      </ul>
      
      <h3>Arquitecturas</h3>
      <p>Se distinguen arquitecturas monocanal y multicanal:</p>
      <ul>
        <li><strong>Monocanal (1oo1):</strong> El SIL más bajo de los subsistemas (sensor, control, actuador) determina el SIL total. Se suma el PFD de cada parte.</li>
        <li><strong>Multicanal (ej. 1oo2):</strong> Arquitectura redundante. Permite alcanzar niveles SIL mayores o mejorar disponibilidad.</li>
      </ul>
    `
    },
    {
        id: "datos",
        title: "8. Datos Característicos",
        questions: ["que es lambda", "que es fit", "vida util", "cuanto dura un equipo sil", "tipo a y b"],
        shortAnswer: "<strong>Lambda (λ)</strong>: Tasa fallos. <strong>FIT</strong>: 10^-9 fallos/h. <strong>SFF/HFT</strong>: Métricas hardware. <strong>Vida Útil</strong>: 8-12 años.",
        content: `
      <h3>Seguridad Integral del Hardware</h3>
      <p>Para la clasificación SIL se utilizan magnitudes clave:</p>
      
      <h4>Tipos de Sistema</h4>
      <ul>
        <li><strong>Tipo A (Sencillos):</strong> Comportamiento de fallo bien conocido (resistencias, relés).</li>
        <li><strong>Tipo B (Complejos):</strong> Comportamiento no totalmente conocido (microprocesadores, software).</li>
      </ul>

      <h4>Métricas</h4>
      <ul>
        <li><strong>HFT (Hardware Fault Tolerance):</strong> Tolerancia a fallos. HFT=N significa que soporta N fallos sin perder seguridad.</li>
        <li><strong>SFF (Safe Failure Fraction):</strong> Porcentaje de fallos seguros o detectados. A mayor SIL, mayor SFF requerido.</li>
      </ul>

      <h4>Tasas de Fallo (Lambda λ)</h4>
      <p>Se divide en 4 grupos:</p>
      <ul>
        <li>λSD: Seguro Detectado</li>
        <li>λSN: Seguro No Detectado</li>
        <li>λPD: Peligroso Detectado</li>
        <li>λPN: Peligroso No Detectado</li>
      </ul>
      <p>Se mide en <strong>FIT</strong> (Failures In Time = 1x10^-9 fallos/hora).</p>
      
      <h4>Mantenimiento y Vida Útil</h4>
      <ul>
        <li><strong>Intervalo de Prueba (Ti):</strong> Tiempo entre pruebas funcionales completas (Proof Test).</li>
        <li><strong>Vida Útil:</strong> Para electrónica (IEC 61508-2) se estima en <strong>8 a 12 años</strong>. Pasado este tiempo, la tasa de fallos aumenta por desgaste y los cálculos PFD ya no son válidos.</li>
      </ul>
    `
    },
    {
        id: "preguntas-basicas",
        title: "9. Preguntas Básicas",
        questions: ["preguntas", "examen", "test", "cuestionario"],
        shortAnswer: "Evaluación de conocimientos sobre SIL2.",
        content: `
      <div class="faq-intro">
        <p>A continuación se presentan 10 preguntas clave sobre el contenido estudiado. Intenta responder antes de ver la solución.</p>
      </div>

      <div class="faq-list">
        <div class="faq-item">
          <div class="faq-q">1. ¿Cómo se define el Riesgo?</div>
          <button class="faq-btn" onclick="this.parentElement.querySelector('.faq-a').classList.toggle('visible')">ver respuesta</button>
          <div class="faq-a">Es el producto de la <strong>probabilidad</strong> de que ocurra un suceso peligroso por el <strong>alcance de los daños</strong> (consecuencias) que este causa.</div>
        </div>
        <div class="faq-item">
          <div class="faq-q">2. ¿Qué norma regula la Seguridad Funcional en la industria de procesos?</div>
          <button class="faq-btn" onclick="this.parentElement.querySelector('.faq-a').classList.toggle('visible')">ver respuesta</button>
          <div class="faq-a">La norma internacional <strong>IEC/DIN EN 61508</strong> (y su derivada IEC 61511).</div>
        </div>
        <div class="faq-item">
          <div class="faq-q">3. ¿Qué significan las siglas SIL?</div>
          <button class="faq-btn" onclick="this.parentElement.querySelector('.faq-a').classList.toggle('visible')">ver respuesta</button>
          <div class="faq-a">Significa <strong>Safety Integrity Level</strong> (Nivel de Seguridad Integral).</div>
        </div>
        <div class="faq-item">
          <div class="faq-q">4. ¿Cuántos niveles SIL existen y cuál es el más alto?</div>
          <button class="faq-btn" onclick="this.parentElement.querySelector('.faq-a').classList.toggle('visible')">ver respuesta</button>
          <div class="faq-a">Existen <strong>4 niveles</strong> (SIL 1 a SIL 4). El <strong>SIL 4</strong> es el de mayor seguridad.</div>
        </div>
        <div class="faq-item">
          <div class="faq-q">5. ¿Qué es un SIS?</div>
          <button class="faq-btn" onclick="this.parentElement.querySelector('.faq-a').classList.toggle('visible')">ver respuesta</button>
          <div class="faq-a">Es un <strong>Sistema Instrumentado de Seguridad</strong>, diseñado para ejecutar funciones de seguridad y prevenir riesgos.</div>
        </div>
        <div class="faq-item">
          <div class="faq-q">6. ¿Qué métrica se usa para sistemas de Baja Demanda?</div>
          <button class="faq-btn" onclick="this.parentElement.querySelector('.faq-a').classList.toggle('visible')">ver respuesta</button>
          <div class="faq-a">Se usa el <strong>PFD</strong> (Probability of Failure on Demand), que mide la probabilidad de fallo cuando se solicita la función.</div>
        </div>
        <div class="faq-item">
          <div class="faq-q">7. ¿Qué es la Tasa de Fallo Lambda (λ)?</div>
          <button class="faq-btn" onclick="this.parentElement.querySelector('.faq-a').classList.toggle('visible')">ver respuesta</button>
          <div class="faq-a">Es la cantidad de fallos por unidad de tiempo. Se suele medir en <strong>FIT</strong> (Fallos por billón de horas).</div>
        </div>
        <div class="faq-item">
          <div class="faq-q">8. ¿Qué es la Fracción de Fallo Seguro (SFF)?</div>
          <button class="faq-btn" onclick="this.parentElement.querySelector('.faq-a').classList.toggle('visible')">ver respuesta</button>
          <div class="faq-a">Es el porcentaje de fallos que <strong>NO son peligrosos</strong> o que son peligrosos pero <strong>detectados</strong> por el sistema.</div>
        </div>
        <div class="faq-item">
          <div class="faq-q">9. ¿Cuál es la vida útil típica de componentes electrónicos según IEC 61508?</div>
          <button class="faq-btn" onclick="this.parentElement.querySelector('.faq-a').classList.toggle('visible')">ver respuesta</button>
          <div class="faq-a">Aproximadamente entre <strong>8 y 12 años</strong>. Pasado este tiempo, la tasa de fallos aumenta por desgaste.</div>
        </div>
        <div class="faq-item">
          <div class="faq-q">10. ¿Qué significa HFT?</div>
          <button class="faq-btn" onclick="this.parentElement.querySelector('.faq-a').classList.toggle('visible')">ver respuesta</button>
          <div class="faq-a"><strong>Hardware Fault Tolerance</strong> (Tolerancia a Fallos de Hardware). Indica cuántos fallos puede soportar el equipo sin perder la función de seguridad.</div>
        </div>
      </div>
    `
    },
    {
        id: "glosario",
        title: "10. Glosario",
        questions: ["definicion siglas", "diccionario sil", "terminos"],
        shortAnswer: "Definiciones de términos clave (SIL, SIS, PFD, HFT, etc).",
        content: `
      <h3>Términos Clave</h3>
      <dl>
        <dt>SIL (Safety Integrity Level)</dt>
        <dd>Criterio de referencia para conocer la seguridad integral de un sistema (Probabilidad de realizar la función bajo condiciones definidas).</dd>
        
        <dt>SIS</dt>
        <dd>Sistema Instrumentado de Seguridad.</dd>
        
        <dt>Seguridad Funcional</dt>
        <dd>Capacidad de un sistema de realizar acciones para mantener un estado seguro.</dd>
        
        <dt>PFD (Probability of Failure on Demand)</dt>
        <dd>Probabilidad de fallo bajo demanda (Modo Baja Demanda).</dd>
        
        <dt>PFH (Probability of Failure per Hour)</dt>
        <dd>Probabilidad de fallo peligroso por hora (Modo Alta Demanda/Continuo).</dd>
        
        <dt>HFT (Hardware Fault Tolerance)</dt>
        <dd>Tolerancia a fallos del hardware 8N significan N+1 fallos necesarios para perder función).</dd>
        
        <dt>SFF (Safe Failure Fraction)</dt>
        <dd>Fracción de fallos seguros.</dd>

        <dt>FIT (Failure In Time)</dt>
        <dd>Fallos en una unidad de tiempo (1 × 10^-9 por hora).</dd>
        
        <dt>MooN (M out of N)</dt>
        <dd>Arquitectura de votación (ej. 1oo2, 2oo3).</dd>

        <dt>Proof Test (Ti)</dt>
        <dd>Prueba de comprobación recurrente para detectar fallos y restaurar sistema.</dd>
      </dl>
    `
    }
];
