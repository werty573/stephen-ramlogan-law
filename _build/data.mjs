// Verified facts (tntyellow.com listing #32425, updated 6 Dec 2022):
// name, Nos. 16-18 Gordon Street San Fernando, +1 868 322 5551, Mon-Sat 8:00-4:00, Sun closed,
// establishment year 2019, practice areas listed below. No website, email or attorney bios published.
export const FIRM = {
  name: 'Stephen Ramlogan & Co.',
  phone: '868-322-5551',
  tel: '+18683225551',
  street: 'Gordon Street',
  address: 'Nos. 16-18 Gordon Street, San Fernando, Trinidad and Tobago',
  est: 2019,
};

// Unsplash photo IDs, each fetched and checked (HTTP 200 + viewed) on 2026-11-26.
const PHOTOS = {
  hero: '1505664194779-8beaceb93744',      // library with busts and law reports
  shelf: '1521587760476-6c12a4b040da',     // bookshelves of bound volumes
  shelfDark: '1479142506502-19b3a3b7ff33', // dark bookcase
  books: '1423592707957-3b212afa6733',     // stacked books and a pen on a desk
  signing: '1450101499163-c8848c66ca85',   // hand signing papers
  columns: '1436450412740-6b988f486c6b',   // classical columns
  gavel: '1575505586569-646b2ca898fc',     // gavel close-up
  keys: '1560518883-ce09059eeffa',         // house model and keys
  family: '1609220136736-443140cffec6',    // father with two children
  justice: '1589829545856-d10d557cf95f',   // justice statue
  meeting: '1517048676732-d65bc937f952',   // meeting around a table with notes
  paperwork: '1554224155-6726b3ff858f',    // forms and calculator
};
export const img = (k, w = 1200, extra = '') => `https://images.unsplash.com/photo-${PHOTOS[k]}?auto=format&fit=crop&w=${w}&q=70${extra}`;

export const AREAS = [
  {
    slug: 'civil-litigation', name: 'Civil Litigation', icon: 'ph-scales', photo: 'columns',
    short: 'Contracts, torts, personal injury and debt',
    card: 'Disputes over contracts, money owed, damage to property and personal injury, from the first letter to trial.',
    lede: 'Advice and representation when a dispute with a person or a business needs to be settled or taken to court.',
    intro: [
      'Most civil disputes start long before anyone files a claim. A contract is not honoured, a debt goes unpaid, a neighbour causes damage or an accident leaves someone injured. Getting advice early can make the difference between a matter that settles and one that goes to trial.',
      'The firm advises on where you stand, writes to the other side, negotiates where that serves you and, where it does not, prepares and conducts the claim through the courts.'
    ],
    handles: ['Breach of contract', 'Recovery of money owed', 'Personal injury claims', 'Motor vehicle accident claims', 'Negligence and other torts', 'Landlord and tenant disputes', 'Property damage', 'Defending claims made against you'],
    steps: [
      ['Review', 'We look at your documents, the timeline and what you want to achieve, and tell you plainly where you stand.'],
      ['Pre-action letter', 'In many cases a formal letter to the other side sets out the claim and invites a response before court.'],
      ['Negotiation', 'Where a fair settlement is possible, we negotiate it and put it in writing.'],
      ['Proceedings', 'If needed, the claim is filed and managed through case management, disclosure and, if it comes to that, trial.'],
    ],
    bring: ['Any contract, receipt, invoice or agreement', 'Letters, emails and messages with the other side', 'Photographs, police reports or medical reports, where relevant', 'A short timeline of what happened, with dates'],
    note: 'Strict time limits apply to civil claims in Trinidad and Tobago, and they differ depending on the type of claim. If you think you have a claim, do not wait to get advice.',
    faqs: [
      ['Do I have to go to court to settle a dispute?', 'Not always. Many disputes settle after a formal letter or through negotiation. Court is one option, and the firm will tell you honestly whether it is the right one for your matter.'],
      ['Someone has filed a claim against me. What should I do?', 'Contact a lawyer promptly. Court documents come with deadlines for responding, and missing them can lead to judgment being entered against you.'],
      ['How long does a civil claim take?', 'It depends on the complexity of the matter, whether the other side defends it and the court calendar. You will be given a realistic view at the start and kept informed as it moves.'],
    ],
  },
  {
    slug: 'criminal-law', name: 'Criminal Law', icon: 'ph-gavel', photo: 'gavel',
    short: 'Advice, bail and representation in court',
    card: 'Advice at the police station, bail applications and representation in the Magistrates\' Court and the High Court.',
    lede: 'Representation for people who are being questioned, charged or prosecuted for a criminal offence.',
    intro: [
      'Being questioned or charged by the police is frightening, and what happens in the first hours can matter a great deal. You have the right to speak with an attorney, and you should use it.',
      'The firm advises clients from the earliest stage, applies for bail, and represents clients through summary matters in the Magistrates\' Court and indictable matters in the High Court.'
    ],
    handles: ['Advice during police questioning', 'Bail applications', 'Summary offences in the Magistrates\' Court', 'Indictable matters in the High Court', 'Traffic and motor vehicle offences', 'Pleas and mitigation', 'Appeals, where available', 'Advice for witnesses and victims'],
    steps: [
      ['First contact', 'Call the office as early as possible. If someone has been detained, tell us where and when.'],
      ['Advice and bail', 'We advise on rights and next steps and, where appropriate, apply for bail.'],
      ['Preparing the case', 'We review the evidence disclosed by the prosecution and prepare the defence with you.'],
      ['In court', 'We represent you at each hearing and explain every stage before it happens.'],
    ],
    bring: ['Any charge sheet, summons or bail document', 'The name of the police station and officers involved', 'Contact details for people who saw what happened', 'Any documents or messages connected to the matter'],
    note: 'If you or a family member has been arrested, you have the right to communicate with an attorney. Call the office during hours on 868-322-5551.',
    faqs: [
      ['Should I speak to the police without an attorney?', 'You have the right to consult an attorney, and it is wise to do so before answering questions about an allegation. The firm can advise you on what to expect.'],
      ['What happens at a bail hearing?', 'The court decides whether a person can be released while the case continues, and on what conditions. An attorney can put forward reasons and conditions that support release.'],
      ['Can a charge be dealt with without a trial?', 'Sometimes. Depending on the evidence and the charge, there may be options such as a plea, and an attorney can advise on whether any of them is in your interest.'],
    ],
  },
  {
    slug: 'family-law', name: 'Family Law', icon: 'ph-users-three', photo: 'family',
    short: 'Divorce, custody, access and maintenance',
    card: 'Divorce, custody and access, maintenance and the division of matrimonial property, handled with discretion.',
    lede: 'Clear, discreet advice on separation, divorce and arrangements for children.',
    intro: [
      'Family matters are personal, and they are often urgent. Whether you are thinking about separation, need arrangements for your children, or are dealing with maintenance, you need advice that is clear about the law and careful with your circumstances.',
      'The firm advises and represents clients in divorce, custody, access and maintenance matters, and in dividing property after a marriage or relationship ends. Where agreement is possible, it is usually the better route, and we will help you reach it.'
    ],
    handles: ['Divorce and separation', 'Custody and access to children', 'Child and spousal maintenance', 'Division of matrimonial property', 'Variation of existing orders', 'Agreements between parties', 'Cohabitational relationships', 'Protection orders'],
    steps: [
      ['Private consultation', 'A confidential meeting to understand your family, your concerns and what you want for the future.'],
      ['Options', 'We explain the routes available, from agreement and mediation to applications before the court.'],
      ['Documents', 'We prepare the petition, application or agreement and handle service on the other party.'],
      ['Resolution', 'We represent you at hearings and work towards orders that are fair and workable.'],
    ],
    bring: ['Marriage certificate and children\'s birth certificates', 'Any existing court orders or agreements', 'Details of income, property and regular expenses', 'Any letters or documents from the other party'],
    note: 'If you or your children are in immediate danger, call the police on 999. A protection order can be applied for urgently.',
    faqs: [
      ['Do we both need lawyers for a divorce?', 'Each party should have independent advice. The firm can act for one party only, and will deal with the other party or their attorney directly.'],
      ['How is custody decided?', 'The court\'s main concern is the welfare of the child. Arrangements agreed between parents are often approved where they serve the child\'s interests.'],
      ['Will my matter be kept private?', 'Yes. What you tell the firm is confidential, and family proceedings are not open to the public in the way other court matters are.'],
    ],
  },
  {
    slug: 'land-conveyancing', name: 'Land & Conveyancing', icon: 'ph-house-line', photo: 'keys',
    short: 'Buying, selling, deeds and title',
    card: 'Buying and selling property, deeds of conveyance and gift, mortgages, title searches and land disputes.',
    lede: 'Careful handling of property transactions and title, so that what you buy is what you own.',
    intro: [
      'Land is usually the largest asset a family owns, and mistakes in a transfer can take years to correct. In Trinidad and Tobago, land may be held under the Real Property Act, with a certificate of title, or under common law title, proved through a chain of registered deeds. Each needs its own checks.',
      'The firm acts for buyers, sellers and families in sales, purchases, gifts and mortgages, carries out searches, prepares and registers deeds, and advises when ownership or boundaries are in dispute.'
    ],
    handles: ['Sale and purchase of land and houses', 'Deeds of conveyance', 'Deeds of gift between family members', 'Mortgages and discharges', 'Title searches and investigations', 'Leases and tenancies', 'Boundary and ownership disputes', 'Powers of attorney for property'],
    steps: [
      ['Instructions', 'We take details of the property, the parties and the agreed terms.'],
      ['Searches', 'We investigate the title and check for mortgages, charges and other interests.'],
      ['Documents', 'We prepare the agreement and the deed or transfer, and explain each document before you sign.'],
      ['Completion', 'We attend to stamping and registration so that the transfer is properly recorded.'],
    ],
    bring: ['Any existing deed or certificate of title', 'Identification for each party', 'The agreed price and any deposit receipts', 'Survey plans and property tax receipts, if available'],
    note: 'Stamp duty and registration fees are government charges and are separate from legal fees. Exemptions can apply in some cases, so ask before you sign.',
    faqs: [
      ['What is the difference between RPA title and common law title?', 'Land under the Real Property Act has a certificate of title issued by the State. Common law title is proved through a chain of deeds recorded at the Registrar General\'s Department. Searches differ for each.'],
      ['Can I give land to my child?', 'Yes, usually by a deed of gift. It must be properly prepared, stamped and registered, and it is worth getting advice on how it fits with your wider plans and your will.'],
      ['Why do I need a search if the seller is family?', 'A search confirms who holds title and whether there are mortgages or other interests attached. It protects everyone, including family.'],
    ],
  },
  {
    slug: 'wills-estates', name: 'Wills & Estates', icon: 'ph-scroll', photo: 'signing',
    short: 'Wills, probate and administration',
    card: 'Wills, powers of attorney, probate and letters of administration, explained in plain language.',
    lede: 'Planning ahead with a properly made will, and guiding families through an estate after a death.',
    intro: [
      'A properly made will lets you decide who receives your property and who will deal with your estate. Without one, the law decides, and families are often left with delay, expense and disagreement.',
      'The firm prepares wills and powers of attorney, and assists executors and families in obtaining a grant of probate or letters of administration, collecting assets and distributing the estate.'
    ],
    handles: ['Preparing and updating wills', 'Powers of attorney', 'Grants of probate', 'Letters of administration', 'Estates where there is no will', 'Transfer of property to beneficiaries', 'Advice for executors', 'Disputes over estates'],
    steps: [
      ['Conversation', 'We discuss your family, your property and how you would like it to pass.'],
      ['Draft', 'We prepare a draft will or application and go through it with you line by line.'],
      ['Signing', 'The will is signed and witnessed correctly, which is essential for it to be valid.'],
      ['Safekeeping', 'We advise on keeping the original safe so it can be found when it is needed.'],
    ],
    bring: ['Identification', 'A list of property, accounts and policies', 'Names and details of the people you want to benefit', 'For an estate: the death certificate and any will found'],
    note: 'A will that is not signed and witnessed correctly may not be valid. It is worth having it prepared by an attorney.',
    faqs: [
      ['What happens if someone dies without a will?', 'The estate is distributed according to rules set by law, and someone usually has to apply to the High Court for letters of administration before property can be dealt with.'],
      ['How often should I update my will?', 'Review it after major life events such as marriage, divorce, the birth of a child or the purchase or sale of property.'],
      ['What is a power of attorney?', 'A document that allows someone you trust to act for you, for example to sign documents while you are abroad. Its terms should be drafted to suit exactly what you need.'],
    ],
  },
];
