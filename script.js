// --- DATA ---
const lessons = [
    { id: 1, navTitle: "①恒常性", title: "体内環境と恒常性", icon: "🏠", content: "みんな、暑い日には汗をかくし、寒い日にはブルブルっと震えるよね。激しい運動をすれば心臓がドキドキするけど、休めば元に戻る。これって当たり前だと思うかもしれないけど、実は体の中ですごいことが起きているんだ。<br><br>私たちの細胞は、<span class='tooltip-container'><strong>体液</strong><span class='tooltip-text'>血液、組織液、リンパ液など、細胞の周囲を満たす液体。</span></span>（血液、組織液、リンパ液など）という液体の中で生きている。この体液の状態、つまり<span class='tooltip-container'><strong>体内環境</strong><span class='tooltip-text'>体液が作る、細胞にとっての内部の環境。</span></span>が、外の世界（外部環境）がどんなに変化しても、ほぼ一定に保たれているんだ。例えば、体温や血液中の酸素・グルコース（栄養）の濃度なんかがそうだね。<br><br>このように、体の状態を一定に保とうとする性質のことを<span class='tooltip-container'><strong>恒常性（ホメオスタシス）</strong><span class='tooltip-text'>外部環境が変化しても、体内の状態を一定に保とうとする性質。生命維持の基本。</span></span>と呼ぶんだ。この恒常性のおかげで、私たちの細胞は安定して活動できるってわけ。", preview: "次回は、体を自動でコントロールする「自律神経系」の秘密に迫るよ！", color: "sky" },
    { id: 2, navTitle: "②自律神経", title: "自律神経系", icon: "🧠", content: "恒常性を保つための情報伝達を担うのが、<span class='tooltip-container'><strong>神経系</strong><span class='tooltip-text'>ニューロンという細胞で構成され、電気信号で高速に情報を伝達するシステム。</span></span>と内分泌系だ。今回は、そのうちの神経系、特に意思とは無関係に働く<span class='tooltip-container'><strong>自律神経系</strong><span class='tooltip-text'>意思とは無関係に内臓などの働きを自動で調節する神経系。</span></span>を見ていこう。<br><br>自律神経系には、2つの種類がある。<br><ul><li class='mt-2 ml-4 list-disc'><span class='tooltip-container'><strong>交感神経</strong><span class='tooltip-text'>活動時や緊張時に働き、心拍数を上げたり血管を収縮させたりする。</span></span>：活動している時や緊張している時に活発になる。「闘争か逃走か」の神経とも言われるよ。</li><li class='mt-2 ml-4 list-disc'><span class='tooltip-container'><strong>副交感神経</strong><span class='tooltip-text'>リラックス時に働き、心拍数を抑えたり消化を促進したりする。</span></span>：リラックスしている時や寝ている時に活発になる。体を休ませ、回復させる働きがあるんだ。</li></ul><br>この2つは、多くの場合、同じ器官に作用するけど、その働きは正反対。これを<span class='tooltip-container'><strong>きっ抗的</strong><span class='tooltip-text'>一つの器官に対して、互いに反対の作用を及ぼすこと。</span></span>に作用するという。例えば心臓の拍動は、交感神経が促進し、副交感神経が抑制することで、状況に応じて適切にコントロールされているんだ。", preview: "次回は、もう一つの司令塔、化学物質で指令を伝える「内分泌系」の仕組みを探るよ！", color: "indigo" },
    { id: 3, navTitle: "③内分泌系", title: "内分泌系とホルモン", icon: "🧪", content: "今回は、もう一つの情報伝達システム、<span class='tooltip-container'><strong>内分泌系</strong><span class='tooltip-text'>ホルモンを血液中に分泌し、体液を介して情報を伝達するシステム。</span></span>について見ていこう。内分泌系は、<span class='tooltip-container'><strong>ホルモン</strong><span class='tooltip-text'>内分泌腺でつくられ、血液によって運ばれる化学物質。特定の細胞に作用する。</span></span>という化学物質を使って情報を伝えるんだ。<br><br>ホルモンは、<span class='tooltip-container'><strong>内分泌腺</strong><span class='tooltip-text'>ホルモンを生産し、血液中に直接分泌する器官。</span></span>という器官で作られて、血液中に分泌される。血液の流れに乗って全身に運ばれるけど、自分にピッタリ合う「鍵穴（<span class='tooltip-container'><strong>受容体</strong><span class='tooltip-text'>特定のホルモンや神経伝達物質と特異的に結合するタンパク質。</span></span>）」を持っている細胞（<span class='tooltip-container'><strong>標的細胞</strong><span class='tooltip-text'>特定のホルモンに対する受容体を持ち、そのホルモンの作用対象となる細胞。</span></span>）にだけ作用するんだ。<br><br>ホルモンの量は<span class='tooltip-container'><strong>負のフィードバック</strong><span class='tooltip-text'>結果が原因にさかのぼって、その原因の働きを抑制する調節機構。</span></span>という仕組みで、多すぎず少なすぎず、ちょうどいい範囲に保たれているんだね。", preview: "次回は、血糖濃度の調節と、その中心となる肝臓の働きについて見ていくよ！", color: "amber" },
    { id: 4, navTitle: "④血糖調節", title: "血糖濃度の調節と肝臓の働き", icon: "🍬", content: "食事をすると、血液中のグルコース濃度、つまり<span class='tooltip-container'><strong>血糖濃度</strong><span class='tooltip-text'>血液中に含まれるグルコースの濃度。健康なヒトでは約0.1%に保たれる。</span></span>が上がる。この調節の中心が、すい臓の<span class='tooltip-container'><strong>ランゲルハンス島</strong><span class='tooltip-text'>すい臓にある内分泌腺組織。インスリンやグルカゴンを分泌する。</span></span>から分泌されるホルモンと、<strong>肝臓</strong>の働きだ。<br><br><ul><li class='mt-2 ml-4 list-disc'><strong>血糖濃度が上がった時</strong>：<span class='tooltip-container'><strong>インスリン</strong><span class='tooltip-text'>ランゲルハンス島B細胞から分泌され、血糖濃度を下げる唯一のホルモン。</span></span>が分泌され、肝臓でグルコースを<strong>グリコーゲン</strong>に変えて貯蔵させる。</li><li class='mt-2 ml-4 list-disc'><strong>血糖濃度が下がった時</strong>：<span class='tooltip-container'><strong>グルカゴン</strong><span class='tooltip-text'>ランゲルハンス島A細胞から分泌され、血糖濃度を上げるホルモン。</span></span>やアドレナリンが分泌され、肝臓に貯蔵したグリコーゲンをグルコースに分解して血液中に放出する。</li></ul><br>このように、肝臓は血糖の貯蔵庫として働き、ホルモンがその出し入れをコントロールしているんだ。このインスリンの働きが悪くなるのが<span class='tooltip-container'><strong>糖尿病</strong><span class='tooltip-text'>インスリンの作用不足により、高血糖状態が続く病気。</span></span>だ。", preview: "次回は、体液のバランスを保つ腎臓の働きと、体温調節のメカニズムを学ぶよ！", color: "rose" },
    { id: 5, navTitle: "⑤腎臓/体温", title: "腎臓の働きと体温の調節", icon: "🌡️", content: "恒常性の維持には、体液の量や濃度の調節、そして体温の調節も欠かせない。<br><br><strong>腎臓の働き</strong><br>腎臓は血液をろ過して尿を作る場所。腎臓の<strong>ネフロン</strong>という単位で、血液から老廃物をこし取り（ろ過）、体に必要な水分やグルコース、イオンなどを再吸収している。この再吸収の量は、<span class='tooltip-container'><strong>バソプレシン</strong><span class='tooltip-text'>脳下垂体後葉から分泌され、腎臓での水の再吸収を促進するホルモン。</span></span>（水の再吸収を促進）などのホルモンによって調節され、体液の濃度を一定に保っているんだ。<br><br><strong>体温の調節</strong><br>体温調節の中枢は脳の間脳視床下部にある。<br><ul><li class='mt-2 ml-4 list-disc'><strong>寒い時</strong>：皮膚の血管を収縮させて熱の放出を防ぎ、筋肉を震わせて（ふるえ）熱を作る。<strong>チロキシン</strong>などのホルモンで代謝を上げ、熱産生を増やす。</li><li class='mt-2 ml-4 list-disc'><strong>暑い時</strong>：皮膚の血管を拡張させ、汗をかくことで熱を放出する。</li></ul>", preview: "次回は、体中を巡る「血液」の成分や、ケガをした時に血が固まる仕組みについて見ていこう！", color: "orange" },
    { id: 6, navTitle: "⑥血液", title: "血液の成分と働き・凝固・循環", icon: "🩸", content: "血液は、酸素や栄養素、ホルモンを運び、老廃物を回収するなど、生命維持に不可欠な役割を担っている。<br><br><strong>血液の成分</strong><br><ul><li class='mt-2 ml-4 list-disc'><strong>血球</strong>：酸素を運ぶ<strong>赤血球</strong>、免疫を担う<strong>白血球</strong>、血液凝固に関わる<strong>血小板</strong>がある。</li><li class='mt-2 ml-4 list-disc'><strong>血しょう</strong>：液体成分。グルコースやタンパク質、二酸化炭素などを運ぶ。</li></ul><br><strong>血液凝固</strong><br>ケガで血管が傷つくと、まず<strong>血小板</strong>が集まって傷口をふさぐ。次に、血しょう中の凝固因子が働き、<span class='tooltip-container'><strong>フィブリン</strong><span class='tooltip-text'>血液凝固の最終段階で形成される、網状の繊維状タンパク質。</span></span>という繊維状のタンパク質が作られる。このフィブリンが網のように血球をからめとって<strong>血ぺい</strong>を作り、出血を止めるんだ。", preview: "次回からはいよいよ「免疫」の世界へ！まずは体を守る最前線のバリア「生体防御」について学ぶよ。", color: "lime" },
    { id: 7, navTitle: "⑦生体防御", title: "生体防御", icon: "🛡️", content: "私たちの周りには、目に見えない細菌やウイルスといった<span class='tooltip-container'><strong>病原体</strong><span class='tooltip-text'>体内に侵入し、病気を引き起こす微生物やウイルスのこと。</span></span>がたくさんいる。それらから体を守る仕組みが<span class='tooltip-container'><strong>生体防御</strong><span class='tooltip-text'>病原体の侵入を防いだり、侵入した病原体を排除したりする体の仕組みの総称。</span></span>だ。<br><br>生体防御には、段階がある。<br><strong>物理的・化学的防御（第一の壁）</strong><br><ul><li class='mt-2 ml-4 list-disc'><strong>物理的な壁</strong>：<strong>皮膚</strong>が病原体の侵入をブロック！ 気管の粘膜にある<strong>繊毛</strong>は、粘液でからめとった異物を体の外に追い出す。</li><li class='mt-2 ml-4 list-disc'><strong>化学的な壁</strong>：涙やだ液に含まれる<strong>リゾチーム</strong>（酵素）や、胃の<strong>胃酸</strong>などが、細菌を攻撃する。</li></ul><br>この壁が破られて病原体が体内に侵入してしまったら…？そこで登場するのが、次の段階である「免疫」なんだ。", preview: "次回は、生まれつき備わっている初期防衛システム「自然免疫」の働きを詳しく見ていくよ！", color: "teal" },
    { id: 8, navTitle: "⑧自然免疫", title: "自然免疫", icon: "⚔️", content: "体内に侵入した病原体に対する最初の防衛ラインが<span class='tooltip-container'><strong>自然免疫</strong><span class='tooltip-text'>生まれつき備わっている、広範囲の病原体に素早く反応する初期防衛システム。</span></span>だ。これは生まれつき備わっている仕組みで、相手を選ばず、素早く反応するのが特徴だ。<br><br><strong>自然免疫で活躍する細胞たち</strong><br><ul><li class='mt-2 ml-4 list-disc'><span class='tooltip-container'><strong>食細胞</strong><span class='tooltip-text'>マクロファージや好中球など、異物を食べて分解する細胞。</span></span>（マクロファージや好中球）：病原体を見つけると、パクリと食べて分解する（<span class='tooltip-container'><strong>食作用</strong><span class='tooltip-text'>細胞が外部の大きな物質を細胞内に取り込む働き。</span></span>）。</li><li class='mt-2 ml-4 list-disc'><span class='tooltip-container'><strong>NK細胞</strong><span class='tooltip-text'>ウイルス感染細胞やがん細胞を直接攻撃するリンパ球の一種。</span></span>：ウイルスに感染した細胞やがん細胞を見つけて攻撃する見張り役。</li><li class='mt-2 ml-4 list-disc'><strong>樹状細胞</strong>：食べた病原体の情報を、次に登場する「獲得免疫」チームに伝える重要な連絡役。</li></ul><br>病原体が侵入した場所が赤く腫れて熱を持つことがあるよね。これは<span class='tooltip-container'><strong>炎症</strong><span class='tooltip-text'>病原体の侵入に対し、赤み・熱・腫れ・痛みを伴う生体防御反応。</span></span>といって、これらの細胞が病原体と戦っているサインなんだ。", preview: "次回は、特定の敵を記憶して攻撃する、超高性能な「獲得免疫」の仕組みを解き明かすよ！", color: "cyan" },
    { id: 9, navTitle: "⑨獲得免疫", title: "獲得免疫", icon: "🎯", content: "自然免疫を突破したしつこい敵には、より強力な専門部隊、<span class='tooltip-container'><strong>獲得免疫（適応免疫）</strong><span class='tooltip-text'>特定の病原体を記憶し、それに対して特異的に働く後天的な免疫システム。</span></span>が立ち向かう。一度侵入した敵（<span class='tooltip-container'><strong>抗原</strong><span class='tooltip-text'>リンパ球によって異物（非自己）として認識される物質。</span></span>）を記憶し、そいつだけを狙い撃ちにする、超高性能な防衛システムだ。<br><br><strong>獲得免疫の流れ</strong><br><ol class='list-decimal ml-5 mt-2 space-y-2'><li>樹状細胞が「こいつが敵だ！」と<span class='tooltip-container'><strong>ヘルパーT細胞</strong><span class='tooltip-text'>他の免疫細胞を活性化させる、免疫の司令塔。</span></span>に<span class='tooltip-container'><strong>抗原提示</strong><span class='tooltip-text'>マクロファージや樹状細胞が、取り込んだ抗原の断片をT細胞に提示すること。</span></span>する。</li><li>活性化したヘルパーT細胞が司令塔となり、2つの部隊に指令を出す。<ul><li class='mt-2 ml-2 list-disc'><strong>細胞性免疫</strong>：<span class='tooltip-container'><strong>キラーT細胞</strong><span class='tooltip-text'>ウイルス感染細胞などを特異的に認識し、破壊するT細胞。</span></span>が、感染細胞を直接攻撃して破壊する。</li><li class='mt-2 ml-2 list-disc'><strong>体液性免疫</strong>：<span class='tooltip-container'><strong>B細胞</strong><span class='tooltip-text'>骨髄で成熟するリンパ球。抗体を産生する。</span></span>が<span class='tooltip-container'><strong>抗体</strong><span class='tooltip-text'>B細胞が産生するタンパク質で、特定の抗原に特異的に結合する。</span></span>という武器を作り、病原体を無力化する。</li></ul></li><li>戦いが終わった後、一部のT細胞やB細胞は<span class='tooltip-container'><strong>記憶細胞</strong><span class='tooltip-text'>抗原の情報を記憶しているリンパ球。長期間体内に留まる。</span></span>として残り、次の侵入に備える（<strong>免疫記憶</strong>）。</li></ol>", preview: "最終回！免疫システムのトラブルや、その力を応用した最先端医療について見ていこう。", color: "emerald" },
    { id: 10, navTitle: "⑩免疫と医療", title: "免疫と疾患と医療", icon: "🩺✨", content: "いつもは頼もしい免疫システムも、トラブルを起こしたり、逆にその力を医療に利用したりすることがある。<br><br><strong>免疫システムのトラブル</strong><br><ul><li class='mt-2 ml-4 list-disc'><span class='tooltip-container'><strong>自己免疫疾患</strong><span class='tooltip-text'>免疫系が自分自身の正常な細胞や組織を攻撃してしまう疾患。</span></span>：自分を攻撃してしまう。（例：関節リウマチ）</li><li class='mt-2 ml-4 list-disc'><span class='tooltip-container'><strong>アレルギー</strong><span class='tooltip-text'>本来無害な物質（アレルゲン）に対して免疫系が過剰に反応する現象。</span></span>：無害なものに過剰反応する。（例：花粉症）</li><li class='mt-2 ml-4 list-disc'><span class='tooltip-container'><strong>免疫不全</strong><span class='tooltip-text'>免疫系の機能が低下し、感染症にかかりやすくなる状態。</span></span>：防御力が低下する。（例：エイズ）</li></ul><br><strong>免疫の力を利用した医療</strong><br><ul><li class='mt-2 ml-4 list-disc'><strong>予防接種（ワクチン）</strong>：免疫記憶の仕組みを利用して、病気を予防する。</li><li class='mt-2 ml-4 list-disc'><strong>抗体医薬</strong>：特定の分子だけを狙う抗体を薬として利用する。</li><li class='mt-2 ml-4 list-disc'><strong>がん免疫療法</strong>：がん細胞に対する免疫のブレーキを外し、攻撃力を高める。（例：<span class='tooltip-container'><strong>免疫チェックポイント阻害薬</strong><span class='tooltip-text'>免疫細胞のブレーキ役（PD-1など）の働きを阻害し、がん細胞への攻撃力を高める薬。</span></span>）</li></ul>", preview: "全10回、お疲れ様でした！私たちの体が、いかに精巧でダイナミックな仕組みによって守られ、調節されているか、少しでも感じてもらえたかな？", color: "purple" }
];

const quizzes = {
    1: { question: "体内の状態をほぼ一定に保って生命を維持する性質を何と呼びますか？", options: ["A. 恒常性（ホメオスタシス）", "B. 適応性", "C. 反射", "D. 代謝"], answer: "A" },
    2: { question: "活動時や緊張時に優位になる自律神経はどちらですか？", options: ["A. 交感神経", "B. 副交感神経", "C. 運動神経", "D. 感覚神経"], answer: "A" },
    3: { question: "最終産物が原因の働きを抑制する調節機構を何といいますか？", options: ["A. 正のフィードバック", "B. 負のフィードバック", "C. きっ抗作用", "D. 抗原提示"], answer: "B" },
    4: { question: "血糖濃度が上昇した際に、肝臓でのグリコーゲンの合成を促進するホルモンは何ですか？", options: ["A. グルカゴン", "B. アドレナリン", "C. インスリン", "D. チロキシン"], answer: "C" },
    5: { question: "体温が低下した際に、熱産生量を増加させるために働くホルモンは次のうちどれですか？", options: ["A. インスリン", "B. バソプレシン", "C. チロキシン", "D. ヘルパーT細胞"], answer: "C" },
    6: { question: "出血時に血液を固める働きを持つ、網状の繊維状タンパク質は何ですか？", options: ["A. ヘモグロビン", "B. フィブリン", "C. コラーゲン", "D. グリコーゲン"], answer: "B" },
    7: { question: "涙やだ液に含まれ、細菌の細胞壁を分解する酵素は何ですか？", options: ["A. ペプシン", "B. アミラーゼ", "C. リゾチーム", "D. トリプシン"], answer: "C" },
    8: { question: "生まれつき備わっている、広範囲の病原体に素早く反応する免疫を何といいますか？", options: ["A. 獲得免疫", "B. 細胞性免疫", "C. 体液性免疫", "D. 自然免疫"], answer: "D" },
    9: { question: "獲得免疫において、他の免疫細胞を活性化させる司令塔の役割を担う細胞は何ですか？", options: ["A. B細胞", "B. キラーT細胞", "C. ヘルパーT細胞", "D. NK細胞"], answer: "C" },
    10: { question: "がん細胞が免疫の攻撃から逃れるために利用する「ブレーキ役」の分子は何ですか？", options: ["A. 抗体", "B. アレルゲン", "C. PD-1", "D. ヒスタミン"], answer: "C" }
};

// --- SCRIPT ---
document.addEventListener('DOMContentLoaded', () => {
    const tocContainer = document.getElementById('toc');
    const lessonsContainer = document.getElementById('lessons-container');
    const quizModal = document.getElementById('quiz-modal');
    const quizTitle = document.getElementById('quiz-title');
    const quizQuestion = document.getElementById('quiz-question');
    const quizOptionsContainer = document.getElementById('quiz-options');
    const quizFeedback = document.getElementById('quiz-feedback');
    const quizCloseBtn = document.getElementById('quiz-close-btn');

    // 1. 目次と授業内容を生成
    lessons.forEach(lesson => {
        // 目次リンクの生成
        const navLink = document.createElement('a');
        navLink.href = `#lesson-${lesson.id}`;
        navLink.className = `nav-link flex-shrink-0 px-4 py-2 text-sm font-bold text-slate-500 hover:bg-slate-100 rounded-full transition-colors duration-200`;
        navLink.innerHTML = `<span class="mr-1">${lesson.icon}</span>${lesson.navTitle}`;
        tocContainer.appendChild(navLink);

        // 授業セクションの生成
        const section = document.createElement('section');
        section.id = `lesson-${lesson.id}`;
        section.className = 'bg-white p-6 sm:p-8 rounded-2xl shadow-lg mb-8 scroll-mt-48';
        
        const previewColorClasses = {
            bg: `bg-${lesson.color}-50`,
            border: `border-${lesson.color}-400`,
            title: `text-${lesson.color}-800`,
            text: `text-${lesson.color}-700`
        };

        section.innerHTML = `
            <h2 class="text-xl sm:text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span class="text-3xl mr-3">${lesson.icon}</span>
                <span class="flex-1">第${lesson.id}回：${lesson.title}</span>
            </h2>
            <div class="prose prose-slate max-w-none text-base leading-relaxed">
                <p>${lesson.content}</p>
            </div>
            <div class="mt-8 flex justify-end">
                <button class="quiz-open-btn bg-${lesson.color}-500 hover:bg-${lesson.color}-600 text-white font-bold py-2 px-6 rounded-full transition-transform transform hover:scale-105" data-lesson-id="${lesson.id}">
                    理解度チェック！
                </button>
            </div>
            <div class="mt-8 p-4 ${previewColorClasses.bg} rounded-lg border-l-4 ${previewColorClasses.border}">
                <h4 class="font-bold ${previewColorClasses.title}">${lesson.id === 10 ? '講義のまとめ' : '次回予告'}</h4>
                <p class="mt-1 ${previewColorClasses.text}">${lesson.preview}</p>
            </div>
        `;
        lessonsContainer.appendChild(section);
    });

    // 2. スクロール位置に応じて目次をアクティブにする
    const navLinks = document.querySelectorAll('.nav-link');
    const lessonSections = document.querySelectorAll('main section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { rootMargin: "-40% 0px -60% 0px" });

    lessonSections.forEach(section => observer.observe(section));

    // 3. クイズ機能
    document.querySelectorAll('.quiz-open-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const lessonId = e.target.dataset.lessonId;
            const quizData = quizzes[lessonId];
            
            quizTitle.textContent = `第${lessonId}回 理解度チェック！`;
            quizQuestion.textContent = quizData.question;
            quizOptionsContainer.innerHTML = '';
            quizFeedback.classList.add('hidden');

            quizData.options.forEach(optionText => {
                const optionBtn = document.createElement('button');
                optionBtn.className = 'block w-full text-left p-4 border rounded-lg hover:bg-slate-100 transition-colors';
                optionBtn.textContent = optionText;
                optionBtn.onclick = () => checkAnswer(optionText.substring(0, 1), quizData.answer);
                quizOptionsContainer.appendChild(optionBtn);
            });
            
            quizModal.classList.remove('hidden');
            quizModal.classList.add('flex');
            setTimeout(() => {
                 quizModal.classList.remove('opacity-0');
                 quizModal.querySelector('.modal-content').classList.remove('scale-95');
            }, 10);
        });
    });

    function checkAnswer(selected, correct) {
        const isCorrect = selected === correct;
        quizFeedback.textContent = isCorrect ? '正解！素晴らしい！' : `残念！正解は ${correct} です。`;
        quizFeedback.className = `mt-6 p-4 rounded-lg text-center font-bold ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`;
        quizFeedback.classList.remove('hidden');

        // Disable all option buttons
        quizOptionsContainer.querySelectorAll('button').forEach(btn => {
            btn.disabled = true;
            if (btn.textContent.startsWith(correct)) {
                 btn.classList.add('bg-green-100', 'border-green-400');
            }
        });
    }

    function closeQuizModal() {
        quizModal.classList.add('opacity-0');
        quizModal.querySelector('.modal-content').classList.add('scale-95');
        setTimeout(() => {
            quizModal.classList.add('hidden');
            quizModal.classList.remove('flex');
        }, 300);
    }

    quizCloseBtn.addEventListener('click', closeQuizModal);
    quizModal.addEventListener('click', (e) => {
        if (e.target === quizModal) {
            closeQuizModal();
        }
    });
});
