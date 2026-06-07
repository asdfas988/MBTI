export const axisOrder = ["EI", "SN", "TF", "JP", "AT"] as const;

export type Axis = (typeof axisOrder)[number];
export type AxisLetter = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P" | "A";
export type TypeCode = `${"E" | "I"}${"S" | "N"}${"T" | "F"}${"J" | "P"}`;
export type TypeVariant = `${TypeCode}-${"A" | "T"}`;

export interface TestQuestion {
  id: string;
  axis: Axis;
  pole: AxisLetter;
  facet: string;
  text: string;
}

export interface TypeSummary {
  name: string;
  temperament: string;
  description: string;
  focus: string;
  watch: string;
  profileHref?: string;
}

export const axisMeta: Record<
  Axis,
  {
    left: AxisLetter;
    right: AxisLetter;
    title: string;
    leftName: string;
    rightName: string;
    description: string;
  }
> = {
  EI: {
    left: "E",
    right: "I",
    title: "能量方向",
    leftName: "外倾 E",
    rightName: "内倾 I",
    description: "你更自然地从外部互动获得动力，还是从独处与内在整理恢复能量。",
  },
  SN: {
    left: "S",
    right: "N",
    title: "信息偏好",
    leftName: "实感 S",
    rightName: "直觉 N",
    description: "你更依赖具体事实与经验，还是更容易看到模式、意义与可能性。",
  },
  TF: {
    left: "T",
    right: "F",
    title: "决策依据",
    leftName: "思考 T",
    rightName: "情感 F",
    description: "你更优先使用逻辑原则判断，还是更优先考虑价值、关系与人的处境。",
  },
  JP: {
    left: "J",
    right: "P",
    title: "生活方式",
    leftName: "判断 J",
    rightName: "知觉 P",
    description: "你更偏好清晰计划与收束，还是更偏好开放弹性与持续调整。",
  },
  AT: {
    left: "A",
    right: "T",
    title: "身份风格",
    leftName: "稳定 A",
    rightName: "敏感 T",
    description: "你更倾向于稳定自信地处理压力，还是更容易自我审视、被压力推动改进。",
  },
};

export const testChoices = [
  { value: -3, label: "非常不同意" },
  { value: -2, label: "不同意" },
  { value: -1, label: "有点不同意" },
  { value: 0, label: "不确定/看情境" },
  { value: 1, label: "有点同意" },
  { value: 2, label: "同意" },
  { value: 3, label: "非常同意" },
] as const;

export const testQuestions: TestQuestion[] = [
  { id: "ei-01", axis: "EI", pole: "E", facet: "clarifying", text: "当我需要理清想法时，和别人讨论通常比独自整理更有效。" },
  { id: "ei-02", axis: "EI", pole: "I", facet: "recovery", text: "连续社交之后，我通常需要独处来恢复精力。" },
  { id: "ei-03", axis: "EI", pole: "E", facet: "initiation", text: "在新环境里，我倾向于先和人建立互动，再慢慢观察细节。" },
  { id: "ei-04", axis: "EI", pole: "I", facet: "observation", text: "我更喜欢先观察局面，等确定节奏后再参与。" },
  { id: "ei-05", axis: "EI", pole: "E", facet: "expression", text: "表达想法的过程中，我常常会越说越清楚。" },
  { id: "ei-06", axis: "EI", pole: "I", facet: "preparation", text: "我更习惯先在心里组织好，再把观点说出来。" },
  { id: "ei-07", axis: "EI", pole: "E", facet: "group_energy", text: "团队讨论会让我更容易产生动力。" },
  { id: "ei-08", axis: "EI", pole: "I", facet: "quiet_energy", text: "安静、不被打扰的时间对我保持稳定很重要。" },
  { id: "ei-09", axis: "EI", pole: "E", facet: "attention", text: "我会自然地把注意力放到外部活动和人际反馈上。" },
  { id: "ei-10", axis: "EI", pole: "I", facet: "attention", text: "我会自然地把注意力放到内在感受和个人思考上。" },
  { id: "ei-11", axis: "EI", pole: "E", facet: "opportunity", text: "遇到机会时，我更可能通过主动开口和外部尝试来打开局面。" },
  { id: "ei-12", axis: "EI", pole: "I", facet: "opportunity", text: "做重要选择前，我需要先和自己的想法待一会儿。" },

  { id: "sn-01", axis: "SN", pole: "S", facet: "evidence", text: "我更信任可观察的事实、经验和具体证据。" },
  { id: "sn-02", axis: "SN", pole: "N", facet: "meaning", text: "我经常先看到事情背后的可能性、趋势或象征意义。" },
  { id: "sn-03", axis: "SN", pole: "S", facet: "learning", text: "学习新东西时，我希望先知道步骤、范例和实际用途。" },
  { id: "sn-04", axis: "SN", pole: "N", facet: "learning", text: "学习新东西时，我更想先理解整体模型和未来延展。" },
  { id: "sn-05", axis: "SN", pole: "S", facet: "attention", text: "我容易注意到现实中的细节、限制和资源。" },
  { id: "sn-06", axis: "SN", pole: "N", facet: "attention", text: "我容易注意到隐藏模式、关联和潜在变化。" },
  { id: "sn-07", axis: "SN", pole: "S", facet: "description", text: "描述问题时，我倾向于从发生了什么、何时何地开始。" },
  { id: "sn-08", axis: "SN", pole: "N", facet: "description", text: "描述问题时，我倾向于从它意味着什么、可能通向哪里开始。" },
  { id: "sn-09", axis: "SN", pole: "S", facet: "solution", text: "稳定、清晰、可执行的方案通常让我更安心。" },
  { id: "sn-10", axis: "SN", pole: "N", facet: "solution", text: "新想法、新解释和开放可能性通常让我更兴奋。" },
  { id: "sn-11", axis: "SN", pole: "S", facet: "certainty", text: "相比“可能会怎样”，我会先关心眼前有哪些确定条件。" },
  { id: "sn-12", axis: "SN", pole: "N", facet: "certainty", text: "即使细节还不完整，我也会先被一个有潜力的方向吸引。" },

  { id: "tf-01", axis: "TF", pole: "T", facet: "decision", text: "做决定时，我会优先看逻辑一致性、因果和原则。" },
  { id: "tf-02", axis: "TF", pole: "F", facet: "decision", text: "做决定时，我会认真考虑人的感受、关系和价值影响。" },
  { id: "tf-03", axis: "TF", pole: "T", facet: "feedback", text: "如果一个反馈是准确的，即使听起来直接，我也愿意接受。" },
  { id: "tf-04", axis: "TF", pole: "F", facet: "feedback", text: "如果一个反馈会伤害关系，我会先考虑如何更温和地表达。" },
  { id: "tf-05", axis: "TF", pole: "T", facet: "conflict", text: "面对冲突时，我会先想哪里不合理、如何修正。" },
  { id: "tf-06", axis: "TF", pole: "F", facet: "conflict", text: "面对冲突时，我会先想每个人真正受到了什么影响。" },
  { id: "tf-07", axis: "TF", pole: "T", facet: "evaluation", text: "我倾向于用标准、公平和一致规则来评估事情。" },
  { id: "tf-08", axis: "TF", pole: "F", facet: "evaluation", text: "我倾向于用意义、价值和具体人的处境来评估事情。" },
  { id: "tf-09", axis: "TF", pole: "T", facet: "persuasion", text: "我更容易被清楚的论证说服。" },
  { id: "tf-10", axis: "TF", pole: "F", facet: "persuasion", text: "我更容易被真诚的动机和价值共鸣打动。" },
  { id: "tf-11", axis: "TF", pole: "T", facet: "pressure", text: "当情绪很强时，我仍会努力把问题拆成可判断的事实。" },
  { id: "tf-12", axis: "TF", pole: "F", facet: "pressure", text: "当一个决定会影响他人，我很难只用效率来衡量它。" },

  { id: "jp-01", axis: "JP", pole: "J", facet: "planning", text: "我喜欢提前安排，把重要事情尽量落到计划里。" },
  { id: "jp-02", axis: "JP", pole: "P", facet: "planning", text: "我喜欢保留弹性，让选择随着信息变化而调整。" },
  { id: "jp-03", axis: "JP", pole: "J", facet: "closure", text: "未完成的任务会占据我的注意力，我会想尽快收尾。" },
  { id: "jp-04", axis: "JP", pole: "P", facet: "closure", text: "开放的任务让我保留探索空间，我不急着过早定案。" },
  { id: "jp-05", axis: "JP", pole: "J", facet: "boundary", text: "清晰的边界、时间表和承诺让我更有安全感。" },
  { id: "jp-06", axis: "JP", pole: "P", facet: "boundary", text: "自由调整节奏和临场应对让我更有发挥空间。" },
  { id: "jp-07", axis: "JP", pole: "J", facet: "decision_timing", text: "我通常更愿意先做决定，再优化执行。" },
  { id: "jp-08", axis: "JP", pole: "P", facet: "decision_timing", text: "我通常更愿意继续收集信息，再决定方向。" },
  { id: "jp-09", axis: "JP", pole: "J", facet: "predictability", text: "当事情按预期推进时，我会明显放松。" },
  { id: "jp-10", axis: "JP", pole: "P", facet: "adaptability", text: "当事情可以随机应变时，我会明显放松。" },
  { id: "jp-11", axis: "JP", pole: "J", facet: "ambiguity", text: "我喜欢把模糊的事情尽快变成明确的下一步。" },
  { id: "jp-12", axis: "JP", pole: "P", facet: "ambiguity", text: "太早固定计划会让我觉得可能性被压缩。" },

  { id: "at-01", axis: "AT", pole: "A", facet: "pressure", text: "遇到压力时，我通常相信自己能逐步处理好。" },
  { id: "at-02", axis: "AT", pole: "T", facet: "worry", text: "事情还没出错时，我也会反复担心哪里可能不够好。" },
  { id: "at-03", axis: "AT", pole: "A", facet: "acceptance", text: "完成一件事后，我比较容易接受结果，不会长时间纠结细节。" },
  { id: "at-04", axis: "AT", pole: "T", facet: "improvement", text: "即使别人觉得已经不错，我也常觉得还可以再改得更好。" },
  { id: "at-05", axis: "AT", pole: "A", facet: "evaluation", text: "外界评价通常不会明显动摇我对自己的判断。" },
  { id: "at-06", axis: "AT", pole: "T", facet: "evaluation", text: "别人的看法会比较容易影响我当天的情绪和自我评价。" },
  { id: "at-07", axis: "AT", pole: "A", facet: "uncertainty", text: "面对不确定，我更倾向于先行动，再根据结果调整。" },
  { id: "at-08", axis: "AT", pole: "T", facet: "uncertainty", text: "面对不确定，我会先想很多风险，确认安全后才行动。" },
  { id: "at-09", axis: "AT", pole: "A", facet: "mistake", text: "我很少因为一次失误就怀疑自己的整体能力。" },
  { id: "at-10", axis: "AT", pole: "T", facet: "mistake", text: "一次失误可能让我长时间回想，并推动自己下次表现更好。" },
  { id: "at-11", axis: "AT", pole: "A", facet: "self_trust", text: "我对自己的节奏和选择通常比较笃定。" },
  { id: "at-12", axis: "AT", pole: "T", facet: "self_standard", text: "我经常用更高标准要求自己，希望持续改进。" },
];

export const testDesignChecks = axisOrder.map((axis) => {
  const questions = testQuestions.filter((question) => question.axis === axis);
  const meta = axisMeta[axis];

  return {
    axis,
    total: questions.length,
    leftCount: questions.filter((question) => question.pole === meta.left).length,
    rightCount: questions.filter((question) => question.pole === meta.right).length,
    facetCount: new Set(questions.map((question) => question.facet)).size,
  };
});

export const typeSummaries = {
  ISTJ: {
    name: "谨慎的守序者",
    temperament: "稳定、负责、重视事实与承诺",
    description: "你倾向于用经验、规则和可验证的信息建立安全感。真正的优势在于可靠、耐心和长期执行，而不是追逐即时的新鲜感。",
    focus: "适合把复杂任务拆成清晰流程，并在稳定系统中持续优化。",
    watch: "压力下可能过度依赖既有规则，忽略情绪信号和新信息。",
  },
  ISFJ: {
    name: "细腻的照护者",
    temperament: "温和、周到、重视责任与关系稳定",
    description: "你容易记住他人的需要，也愿意用踏实行动维持关系。你的力量常常不张扬，但会让周围的人感到被托住。",
    focus: "适合在具体场景中照顾细节、修复秩序、维护长期信任。",
    watch: "压力下可能过度承担，难以及时说出自己的边界和不满。",
  },
  INFJ: {
    name: "洞察的整合者",
    temperament: "理想、深思、关注意义与内在一致",
    description: "你倾向于从关系和事件背后寻找更深层的模式。你重视真诚，也常把个人成长与帮助他人联系在一起。",
    focus: "适合把复杂经验整理成有方向的理解，并推动温和而持续的改变。",
    watch: "压力下可能把直觉判断绝对化，或背负过多拯救他人的责任。",
  },
  INTJ: {
    name: "战略的建构者",
    temperament: "独立、系统、重视长线模型与效率",
    description: "你习惯把现实拆成结构、趋势和可改进的系统。你不满足于表面解释，更想知道底层逻辑是否成立。",
    focus: "适合制定长期策略、重构复杂问题，并把抽象模型落到行动。",
    watch: "压力下可能显得过度疏离，忽略他人的情绪节奏和合作需求。",
    profileHref: "/mbti/intj/",
  },
  ISTP: {
    name: "冷静的问题解决者",
    temperament: "独立、务实、偏好直接试验",
    description: "你通常在真实情境中理解系统如何运作。相比长篇解释，你更信任动手、观察和迅速修正。",
    focus: "适合处理需要判断、技术、拆解和现场应变的问题。",
    watch: "压力下可能回避长期承诺，或在关系里显得难以靠近。",
  },
  ISFP: {
    name: "敏感的体验者",
    temperament: "真诚、审美、重视个人价值与当下体验",
    description: "你倾向于通过具体经验感受世界，也很在意选择是否符合内心价值。你不一定高声表达，但会在行动里坚持真实。",
    focus: "适合把个人感受、审美和现实行动结合起来，创造有温度的作品或关系。",
    watch: "压力下可能沉默退开，让别人难以及时理解你的真实需求。",
  },
  INFP: {
    name: "理想的内省者",
    temperament: "共情、想象、追求真实与价值感",
    description: "你很容易被意义、情感和内在一致性触动。你关注一个人真正是谁，也希望自己的生活不要背离内心信念。",
    focus: "适合写作、咨询、创作、价值探索，以及把个人体验转化成理解。",
    watch: "压力下可能理想化或自责，把复杂现实全部解释成自己的问题。",
    profileHref: "/mbti/infp/",
  },
  INTP: {
    name: "好奇的分析者",
    temperament: "独立、怀疑、重视概念精确",
    description: "你倾向于追问概念是否清楚、逻辑是否一致。你常在复杂观点之间建立连接，并享受不断修正理解的过程。",
    focus: "适合理论建模、知识系统、技术研究和需要深度分析的主题。",
    watch: "压力下可能陷入过度分析，延迟表达感受或实际行动。",
  },
  ESTP: {
    name: "敏捷的行动者",
    temperament: "现实、果断、擅长现场反应",
    description: "你倾向于在行动中获得信息，能快速捕捉机会、风险和人际气氛。你通常不怕变化，甚至会被挑战激活。",
    focus: "适合谈判、现场运营、危机处理和需要速度的实践场景。",
    watch: "压力下可能低估长期后果，或用刺激感回避更深层的情绪。",
  },
  ESFP: {
    name: "鲜活的连接者",
    temperament: "热情、感官、重视体验和关系温度",
    description: "你容易把注意力放在当下的人、气氛和真实体验上。你的存在感常常能让关系变得更松动、更有人味。",
    focus: "适合表演、服务、陪伴、活动和需要感染力的场景。",
    watch: "压力下可能为了维持愉快气氛而回避困难对话。",
  },
  ENFP: {
    name: "灵感的探索者",
    temperament: "开放、热情、追求可能性与真诚连接",
    description: "你善于看到新的关联和人生可能，也很容易被人的故事打动。你需要自由探索，也需要关系中的真实回应。",
    focus: "适合创意发想、内容表达、人际连接和跨领域整合。",
    watch: "压力下可能开始很多方向，却难以把重要想法持续推进到底。",
  },
  ENTP: {
    name: "机敏的辩思者",
    temperament: "灵活、犀利、喜欢挑战既有解释",
    description: "你倾向于通过提问、辩论和重组观点来理解世界。你对新模型很敏感，也愿意测试一个想法到底能走多远。",
    focus: "适合策略讨论、创新产品、问题拆解和需要快速迭代的环境。",
    watch: "压力下可能过度拆解他人观点，让关系感到被攻击或不被安放。",
  },
  ESTJ: {
    name: "高效的组织者",
    temperament: "务实、直接、重视标准与执行",
    description: "你倾向于把混乱局面整理成规则、职责和结果。你的优势是让事情真正落地，并推动团队承担承诺。",
    focus: "适合管理流程、组织资源、推进目标和建立可复制的秩序。",
    watch: "压力下可能把效率放得太前，忽略个体差异和情绪缓冲。",
  },
  ESFJ: {
    name: "可靠的协调者",
    temperament: "合群、负责、重视关系秩序与照顾",
    description: "你擅长感知群体需要，也愿意为关系稳定付出行动。你通常会努力让每个人被看见、被安排、被照顾。",
    focus: "适合团队协调、服务支持、社群运营和需要人际敏感度的工作。",
    watch: "压力下可能太在意外界评价，把自己的需要放到最后。",
  },
  ENFJ: {
    name: "温暖的引导者",
    temperament: "共情、组织、关注成长与共同方向",
    description: "你容易看到他人的潜能，也愿意为关系和群体注入方向感。你擅长把人的情绪、价值和行动连接起来。",
    focus: "适合带领团队、教育咨询、公共表达和推动群体协作。",
    watch: "压力下可能过度负责，替别人承担本该由对方承担的成长。",
  },
  ENTJ: {
    name: "果断的统筹者",
    temperament: "战略、坚定、重视目标与系统效率",
    description: "你倾向于迅速识别目标、资源和关键阻力，并推动系统朝更高效的方向运行。你常把潜力理解为可以被训练和实现的能力。",
    focus: "适合战略规划、组织管理、创业和需要强执行力的复杂项目。",
    watch: "压力下可能把脆弱和犹豫看成低效，因而错过关系中的重要信号。",
  },
} satisfies Record<TypeCode, TypeSummary>;
