import { Chapter } from '../types/mcq';

export const chaptersPart1: Chapter[] = [
  {
    id: 'pectoral-region',
    number: 1,
    title: 'Pectoral Region',
    regionGroup: 'Shoulder & Axilla',
    description: 'Clavipectoral fascia, pectoralis major and minor, subclavius, and anatomy & lymphatic drainage of the mammary gland.',
    questions: [
      {
        id: 'pectoral-1',
        chapterId: 'pectoral-region',
        number: 1,
        text: 'One of the following structures pierces the clavipectoral fascia:',
        source: '2018',
        options: [
          { id: 'a', text: 'First part of the axillary artery.' },
          { id: 'b', text: 'Axillary vein.' },
          { id: 'c', text: 'Lateral pectoral nerve.' },
          { id: 'd', text: 'Medial pectoral nerve.' }
        ],
        correctOptionId: 'c',
        explanation: 'The clavipectoral fascia is pierced by four key structures: the lateral pectoral nerve, thoracoacromial artery (and vein), cephalic vein, and lymphatics draining from the breast/pectoral region to the apical axillary lymph nodes. The medial pectoral nerve pierces pectoralis minor instead.'
      },
      {
        id: 'pectoral-2',
        chapterId: 'pectoral-region',
        number: 2,
        text: 'Considering the breast, choose the correct statement:',
        source: '2017',
        options: [
          { id: 'a', text: 'It lies directly on the pectoralis minor.' },
          { id: 'b', text: 'Its medial part is drained by the subscapular lymph nodes.' },
          { id: 'c', text: 'Its tail arises from the upper lateral quadrant.' },
          { id: 'd', text: 'It is formed of 10 lobes.' }
        ],
        correctOptionId: 'c',
        explanation: 'The axillary tail of Spence projects from the upper lateral quadrant of the breast, passes through the foramen of Langer in the deep fascia, and enters the axilla. The breast consists of 15–20 lobes and lies on the deep pectoral fascia covering pectoralis major, serratus anterior, and external oblique.'
      },
      {
        id: 'pectoral-3',
        chapterId: 'pectoral-region',
        number: 3,
        text: 'Considering the nerve supply of pectoralis major; it is innervated by:',
        source: '2024 - 2025',
        options: [
          { id: 'a', text: 'Lateral pectoral nerve.' },
          { id: 'b', text: 'Medial pectoral nerve.' },
          { id: 'c', text: 'Both medial and lateral pectoral nerves.' },
          { id: 'd', text: 'Nerve to pectoralis major.' }
        ],
        correctOptionId: 'c',
        explanation: 'Pectoralis major has dual motor innervation from both the lateral pectoral nerve (C5–C7, supplying the clavicular head) and the medial pectoral nerve (C8–T1, supplying the sternocostal head).'
      },
      {
        id: 'pectoral-4',
        chapterId: 'pectoral-region',
        number: 4,
        text: 'The breast is supplied by:',
        source: 'IPKA',
        options: [
          { id: 'a', text: 'Lateral thoracic artery.' },
          { id: 'b', text: 'Internal thoracic artery.' },
          { id: 'c', text: 'Intercostal arteries.' },
          { id: 'd', text: 'All of the above.' },
          { id: 'e', text: 'None of the above.' }
        ],
        correctOptionId: 'd',
        explanation: 'The mammary gland receives rich arterial blood supply from perforating branches of the internal thoracic artery, the lateral thoracic and thoracoacromial branches of the axillary artery, and lateral branches of the posterior intercostal arteries.'
      },
      {
        id: 'pectoral-5',
        chapterId: 'pectoral-region',
        number: 5,
        text: 'The clavipectoral fascia is pierced by, mark the appropriate:',
        source: 'DEP BOOK - 2022 - 2019',
        options: [
          { id: 'a', text: 'Lateral pectoral nerve.' },
          { id: 'b', text: 'Medial pectoral nerve.' },
          { id: 'c', text: 'Suprascapular nerve.' },
          { id: 'd', text: 'Upper subscapular nerve.' },
          { id: 'e', text: 'Lateral thoracic artery.' }
        ],
        correctOptionId: 'a',
        explanation: 'The lateral pectoral nerve pierces the clavipectoral fascia above pectoralis minor to reach the deep surface of pectoralis major.'
      },
      {
        id: 'pectoral-6',
        chapterId: 'pectoral-region',
        number: 6,
        text: "The following structure doesn't pierce the clavipectoral fascia:",
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Lateral thoracic artery.' },
          { id: 'b', text: 'Lateral pectoral nerve.' },
          { id: 'c', text: 'Thoracoacromial artery.' },
          { id: 'd', text: 'Cephalic vein.' }
        ],
        correctOptionId: 'a',
        explanation: 'The lateral thoracic artery arises from the 2nd part of the axillary artery and runs along the lower border of pectoralis minor without piercing the clavipectoral fascia, whereas the lateral pectoral nerve, thoracoacromial artery, and cephalic vein all pierce it.'
      },
      {
        id: 'pectoral-7',
        chapterId: 'pectoral-region',
        number: 7,
        text: 'Regarding pectoralis major, mark one correct statement:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Inserted into the lateral lip of the bicipital groove.' },
          { id: 'b', text: 'Receives nerve supply from posterior cord of brachial plexus.' },
          { id: 'c', text: 'Forms the medial wall of axilla.' },
          { id: 'd', text: 'Is a powerful lateral rotator of the shoulder.' }
        ],
        correctOptionId: 'a',
        explanation: 'Pectoralis major inserts via a bilaminar tendon into the lateral lip of the intertubercular (bicipital) groove of the humerus ("Lady between two Majors": Latissimus dorsi on the floor, Pectoralis major on the lateral lip, Teres major on the medial lip).'
      },
      {
        id: 'pectoral-8',
        chapterId: 'pectoral-region',
        number: 8,
        text: 'The coracoid process of the scapula gives attachment to:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Pectoralis minor.' },
          { id: 'b', text: 'Capsule of shoulder joint.' },
          { id: 'c', text: 'Long head of biceps brachii muscle.' },
          { id: 'd', text: 'Long head of triceps.' }
        ],
        correctOptionId: 'a',
        explanation: 'Three muscles attach to the coracoid process: pectoralis minor (inserts into its medial border and upper surface), short head of biceps brachii, and coracobrachialis (arise from its tip).'
      },
      {
        id: 'pectoral-9',
        chapterId: 'pectoral-region',
        number: 9,
        text: 'One of the following bones undergoes membranous ossification:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Clavicle.' },
          { id: 'b', text: 'Radius.' },
          { id: 'c', text: 'Humerus.' },
          { id: 'd', text: 'Ulna.' }
        ],
        correctOptionId: 'a',
        explanation: 'The clavicle is the first bone in the body to ossify (5th–6th week of intrauterine life) and ossifies predominantly in membrane (intramembranous ossification), except for its sternal end which ossifies in cartilage.'
      },
      {
        id: 'pectoral-10',
        chapterId: 'pectoral-region',
        number: 10,
        text: 'The following muscle has double innervation:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Pectoralis major.' },
          { id: 'b', text: 'Pectoralis minor.' },
          { id: 'c', text: 'Subclavius.' },
          { id: 'd', text: 'Deltoid.' }
        ],
        correctOptionId: 'a',
        explanation: 'Pectoralis major receives dual innervation from the medial and lateral pectoral nerves (arising from the medial and lateral cords of the brachial plexus respectively).'
      },
      {
        id: 'pectoral-11',
        chapterId: 'pectoral-region',
        number: 11,
        text: 'The axillary tail of the breast is related to:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Pectoral group of lymph nodes.' },
          { id: 'b', text: 'Apical group of lymph nodes.' },
          { id: 'c', text: 'Central group of lymph nodes.' },
          { id: 'd', text: 'Humeral group of lymph nodes.' }
        ],
        correctOptionId: 'a',
        explanation: 'The axillary tail of Spence extends along the lower border of pectoralis minor in close contact with the pectoral (anterior) group of axillary lymph nodes.'
      },
      {
        id: 'pectoral-12',
        chapterId: 'pectoral-region',
        number: 12,
        text: 'Which of the following statements is true for pectoralis major muscle:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'It arises from humerus.' },
          { id: 'b', text: 'It inserts into the bony ribs.' },
          { id: 'c', text: 'It adducts the arm.' },
          { id: 'd', text: 'It is innervated by the median nerve.' }
        ],
        correctOptionId: 'c',
        explanation: 'Pectoralis major is a powerful adductor and medial rotator of the arm at the shoulder joint; its clavicular head also flexes the arm.'
      },
      {
        id: 'pectoral-13',
        chapterId: 'pectoral-region',
        number: 13,
        text: 'The female breast, select the true statement:',
        source: '2022',
        options: [
          { id: 'a', text: 'Has a nipple that is usually located opposite the 6th intercostal space.' },
          { id: 'b', text: "Has Cooper's ligament that suspends the breast." },
          { id: 'c', text: 'Has a bed formed only by the serratus anterior muscle.' },
          { id: 'd', text: 'Its lymphatics drain mainly in the parasternal lymph nodes.' }
        ],
        correctOptionId: 'b',
        explanation: 'Suspensory ligaments of Cooper are fibrous septa that anchor the skin and mammary gland lobules to the underlying pectoral fascia. The nipple usually lies in the 4th intercostal space, and ~75% of lymph drains to the axillary nodes.'
      },
      {
        id: 'pectoral-14',
        chapterId: 'pectoral-region',
        number: 14,
        text: 'Regarding the pectoralis major muscle:',
        source: '2019',
        options: [
          { id: 'a', text: 'Is innervated by the medial pectoral nerve only.' },
          { id: 'b', text: 'Inserts into the medial lip of the intertubercular groove.' },
          { id: 'c', text: 'Can act as an accessory muscle of deep expiration.' },
          { id: 'd', text: 'Acts with latissimus dorsi to adduct the arm.' }
        ],
        correctOptionId: 'd',
        explanation: 'Pectoralis major acts synergistically with latissimus dorsi and teres major to strongly adduct and medially rotate the humerus. When the arms are fixed, it acts as an accessory muscle of forced inspiration (not expiration).'
      },
      {
        id: 'pectoral-15',
        chapterId: 'pectoral-region',
        number: 15,
        text: 'Regarding pectoralis major, mark one correct statement:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Inserted into the lateral lip of the bicipital groove.' },
          { id: 'b', text: 'Receives nerve supply from posterior cord of brachial plexus.' },
          { id: 'c', text: 'Forms the medial wall of axilla.' },
          { id: 'd', text: 'Is a powerful lateral rotator of the shoulder.' }
        ],
        correctOptionId: 'a',
        explanation: 'Pectoralis major inserts into the lateral lip of the bicipital (intertubercular) groove, forms the bulk of the anterior wall of the axilla, and medially rotates and adducts the arm.'
      },
      {
        id: 'pectoral-16',
        chapterId: 'pectoral-region',
        number: 16,
        text: 'The clavipectoral fascia:',
        source: '2025',
        options: [
          { id: 'a', text: 'Is pierced by axillary artery' },
          { id: 'b', text: 'Surrounds pectoralis major' },
          { id: 'c', text: 'Lies between pectoralis minor and subclavius' },
          { id: 'd', text: 'Axillary septum is part of it' }
        ],
        correctOptionId: 'c',
        explanation: 'The clavipectoral fascia is a strong fascial sheet situated deep to the clavicular part of pectoralis major, stretching between the subclavius muscle superiorly and the pectoralis minor muscle inferiorly, continuing below as the suspensory ligament of the axilla.'
      }
    ]
  },
  {
    id: 'thoracic-wall-muscles',
    number: 2,
    title: 'Muscles Connecting Upper Limb with Thoracic Wall',
    regionGroup: 'Shoulder & Axilla',
    description: 'Serratus anterior attachments, actions in scapular protraction and upward rotation, long thoracic nerve innervation, and winged scapula.',
    questions: [
      {
        id: 'thoracic-wall-1',
        chapterId: 'thoracic-wall-muscles',
        number: 1,
        text: 'Injury of which of the following nerves results in winging of the scapula:',
        source: '2018',
        options: [
          { id: 'a', text: 'Dorsal scapular.' },
          { id: 'b', text: 'Long thoracic.' },
          { id: 'c', text: 'Thoracodorsal.' },
          { id: 'd', text: 'Axillary.' }
        ],
        correctOptionId: 'b',
        explanation: 'The long thoracic nerve (C5, C6, C7) innervates the serratus anterior muscle. Injury to this nerve paralyzes serratus anterior, causing the medial border and inferior angle of the scapula to project posteriorly (winged scapula).'
      },
      {
        id: 'thoracic-wall-2',
        chapterId: 'thoracic-wall-muscles',
        number: 2,
        text: 'A postoperative examination of a 55-year-old woman, after surgical removal of axillary lymph nodes, revealed that the medial border and inferior angle of the left scapula became unusually prominent (projected posteriorly) especially if the patient pushed with outstretched arm against resistance (e.g., a wall). What muscle must have been denervated during the axillary dissection?',
        source: '2016',
        options: [
          { id: 'a', text: 'Levator scapulae.' },
          { id: 'b', text: 'Rhomboideus major.' },
          { id: 'c', text: 'Serratus anterior.' },
          { id: 'd', text: 'Subscapularis.' }
        ],
        correctOptionId: 'c',
        explanation: 'During axillary lymph node dissection or radical mastectomy, the long thoracic nerve running on the superficial surface of serratus anterior can be injured, denervating serratus anterior and producing a classic winged scapula when pushing against a wall.'
      },
      {
        id: 'thoracic-wall-3',
        chapterId: 'thoracic-wall-muscles',
        number: 3,
        text: 'The following fact is true of the serratus anterior muscle:',
        source: '2024 - 2025',
        options: [
          { id: 'a', text: 'It arises as digitations from the lower eight ribs' },
          { id: 'b', text: 'The upper four digitations insert into the lateral border of the costal surface of scapula' },
          { id: 'c', text: 'The lower digitations rotate the scapula upward during abduction' },
          { id: 'd', text: 'It is innervated by intercostal nerves' }
        ],
        correctOptionId: 'c',
        explanation: 'Serratus anterior arises from the upper 8 ribs and inserts into the ventral (costal) aspect of the medial border of the scapula. Its lower 4–5 digitations insert into the inferior angle and pull it forward and laterally to rotate the glenoid cavity upward during overhead abduction of the arm.'
      },
      {
        id: 'thoracic-wall-4',
        chapterId: 'thoracic-wall-muscles',
        number: 4,
        text: 'A 45-year-old man is stabbed in the lateral chest wall. He now presents with winging of scapula when pushing against a wall. Which nerve is likely damaged?',
        source: '2024',
        options: [
          { id: 'a', text: 'Axillary nerve.' },
          { id: 'b', text: 'Long thoracic nerve.' },
          { id: 'c', text: 'Dorsal scapular nerve.' },
          { id: 'd', text: 'Thoracodorsal nerve.' }
        ],
        correctOptionId: 'b',
        explanation: 'The long thoracic nerve of Bell descends superficially along the mid-axillary line on the outer surface of serratus anterior, making it vulnerable to lateral chest wall stab wounds and resulting in winging of the scapula.'
      },
      {
        id: 'thoracic-wall-5',
        chapterId: 'thoracic-wall-muscles',
        number: 5,
        text: 'Paralysis of the serratus anterior muscle causes:',
        source: 'IPKA',
        options: [
          { id: 'a', text: 'Winging of the scapula.' },
          { id: 'b', text: 'Claw hand.' },
          { id: 'c', text: 'Ape hand.' },
          { id: 'd', text: 'Wrist drop.' }
        ],
        correctOptionId: 'a',
        explanation: 'Serratus anterior holds the medial border of the scapula closely applied against the thoracic wall. Paralysis leads to winging of the scapula and inability to abduct the arm above 90 degrees.'
      },
      {
        id: 'thoracic-wall-6',
        chapterId: 'thoracic-wall-muscles',
        number: 6,
        text: 'The serratus anterior muscle:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Arises by eight digitations from the lower eight ribs.' },
          { id: 'b', text: 'Is inserted into the costal aspect of the medial border of scapula.' },
          { id: 'c', text: 'Is innervated by thoracodorsal nerve.' },
          { id: 'd', text: 'Is powerful extensor of the shoulder.' }
        ],
        correctOptionId: 'b',
        explanation: 'Serratus anterior arises from the upper 8 ribs and inserts along the entire anterior (costal/ventral) surface of the medial border of the scapula from the superior angle to the inferior angle.'
      },
      {
        id: 'thoracic-wall-7',
        chapterId: 'thoracic-wall-muscles',
        number: 7,
        text: 'Winging of scapula follows paralysis of which muscle?',
        source: 'DEP BOOK - 2019 - 2025',
        options: [
          { id: 'a', text: 'Serratus anterior muscle.' },
          { id: 'b', text: 'Deltoid muscle.' },
          { id: 'c', text: 'Trapezius muscle.' },
          { id: 'd', text: 'Teres minor muscle.' },
          { id: 'e', text: 'Teres major muscle.' },
          { id: 'f', text: 'Pectoralis major muscle.' }
        ],
        correctOptionId: 'a',
        explanation: 'Paralysis of serratus anterior causes the medial border and inferior angle of the scapula to stand out prominently like a wing.'
      },
      {
        id: 'thoracic-wall-8',
        chapterId: 'thoracic-wall-muscles',
        number: 8,
        text: 'A physical sign known as winged scapula tests loss of function to which of the following muscles:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Rhomboid major.' },
          { id: 'b', text: 'Levator scapulae.' },
          { id: 'c', text: 'Latissimus dorsi.' },
          { id: 'd', text: 'Serratus anterior.' }
        ],
        correctOptionId: 'd',
        explanation: 'Pushing against a wall tests serratus anterior protraction; loss of function produces winged scapula.'
      },
      {
        id: 'thoracic-wall-9',
        chapterId: 'thoracic-wall-muscles',
        number: 9,
        text: 'The whole ventral aspect of scapula medial border serves as an attachment to:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Teres major.' },
          { id: 'b', text: 'Serratus anterior.' },
          { id: 'c', text: 'Rhomboid major.' },
          { id: 'd', text: 'Subscapularis.' }
        ],
        correctOptionId: 'b',
        explanation: 'The entire ventral (costal) aspect of the medial border of the scapula provides insertion for the serratus anterior muscle (1st digitation at superior angle, 2nd–3rd along medial border, and lower 5 at the inferior angle).'
      },
      {
        id: 'thoracic-wall-10',
        chapterId: 'thoracic-wall-muscles',
        number: 10,
        text: 'The serratus anterior muscle, mark the wrong answer:',
        source: '2022',
        options: [
          { id: 'a', text: 'Arises by eight digitations from the upper eight ribs.' },
          { id: 'b', text: 'Is innervated by long thoracic nerve.' },
          { id: 'c', text: 'Is a powerful retractor of shoulder.' },
          { id: 'd', text: 'Fixes the scapula to the chest wall during mobility of the upper limb.' }
        ],
        correctOptionId: 'c',
        explanation: 'Serratus anterior is the chief protractor (forward puller, "boxer\'s muscle") of the scapula, NOT a retractor. Retraction is performed by the middle fibers of trapezius and the rhomboids.'
      },
      {
        id: 'thoracic-wall-11',
        chapterId: 'thoracic-wall-muscles',
        number: 11,
        text: 'A 53-year-old lady recovered following a surgical removing of the breast. On examination she has winging of the scapula. Which nerve is possibly injured?',
        source: '2021',
        options: [
          { id: 'a', text: 'Nerve to latissimus dorsi.' },
          { id: 'b', text: 'Nerve to serratus anterior.' },
          { id: 'c', text: 'Nerve to pectoralis major.' },
          { id: 'd', text: 'Nerve to pectoralis minor.' }
        ],
        correctOptionId: 'b',
        explanation: 'The nerve to serratus anterior (long thoracic nerve) lies on the medial wall of the axilla and can be damaged during mastectomy with axillary clearance, leading to winging of the scapula.'
      },
      {
        id: 'thoracic-wall-12',
        chapterId: 'thoracic-wall-muscles',
        number: 12,
        text: 'The innervation of the serratus anterior muscle is done by:',
        source: '2021',
        options: [
          { id: 'a', text: 'Medial pectoral nerve.' },
          { id: 'b', text: 'Lateral pectoral nerve.' },
          { id: 'c', text: 'Long thoracic nerve.' },
          { id: 'd', text: 'Axillary nerve.' }
        ],
        correctOptionId: 'c',
        explanation: 'Serratus anterior is innervated by the long thoracic nerve (C5, C6, C7) arising directly from the roots of the brachial plexus.'
      },
      {
        id: 'thoracic-wall-13',
        chapterId: 'thoracic-wall-muscles',
        number: 13,
        text: 'What are the attachments of the serratus anterior muscle, choose the correct statement:',
        source: '2021',
        options: [
          { id: 'a', text: 'Anteriorly from the external surface of the upper eight ribs.' },
          { id: 'b', text: 'Anterior from the first five costal cartilages.' },
          { id: 'c', text: 'Lateral and posterior to the lateral border of the scapula.' },
          { id: 'd', text: 'Dorsal aspect of the medial border of the scapula.' }
        ],
        correctOptionId: 'a',
        explanation: 'Serratus anterior originates by 8 fleshy digitations from the outer surfaces of the upper 8 ribs in the mid-clavicular/mid-axillary plane and inserts into the costal (ventral) surface of the medial border of the scapula.'
      },
      {
        id: 'thoracic-wall-14',
        chapterId: 'thoracic-wall-muscles',
        number: 14,
        text: "When does 'winging' of the scapula happen?",
        source: '2021',
        options: [
          { id: 'a', text: 'When the serratus anterior muscle is contracted.' },
          { id: 'b', text: 'When the serratus anterior muscle is paralyzed.' },
          { id: 'c', text: 'When the pectoralis major muscle is contracted.' },
          { id: 'd', text: 'When the pectoralis major muscle is paralyzed.' }
        ],
        correctOptionId: 'b',
        explanation: 'Winging of the scapula occurs when the serratus anterior muscle is paralyzed (due to long thoracic nerve lesion), so the medial border of the scapula can no longer be held against the rib cage.'
      }
    ]
  },
  {
    id: 'back-muscles',
    number: 3,
    title: 'Muscles Connecting Upper Limb with Vertebral Column (Muscles of Back)',
    regionGroup: 'Shoulder & Axilla',
    description: 'Trapezius, latissimus dorsi, levator scapulae, rhomboid major and minor, and the triangle of auscultation.',
    questions: [
      {
        id: 'back-1',
        chapterId: 'back-muscles',
        number: 1,
        text: 'The trapezius and latissimus dorsi muscles share in the boundaries of:',
        source: '2018',
        options: [
          { id: 'a', text: 'Upper triangular space.' },
          { id: 'b', text: 'Auscultation triangle.' },
          { id: 'c', text: 'Lumbar triangle.' },
          { id: 'd', text: 'Lower triangular space.' }
        ],
        correctOptionId: 'b',
        explanation: 'The triangle of auscultation is bounded medially by the lower lateral border of trapezius, inferiorly by the upper border of latissimus dorsi, and laterally by the medial border of the scapula (with rhomboid major in its floor).'
      },
      {
        id: 'back-2',
        chapterId: 'back-muscles',
        number: 2,
        text: 'Paralysis of which of the following muscles result(s) in deviation of the medial border of the ipsilateral scapula away from the middle line more than that of the other side:',
        source: '2017',
        options: [
          { id: 'a', text: 'Rhomboids major and minor.' },
          { id: 'b', text: 'Serratus anterior.' },
          { id: 'c', text: 'Deltoid and teres minor.' },
          { id: 'd', text: 'Latissimus dorsi.' }
        ],
        correctOptionId: 'a',
        explanation: 'Rhomboid major and minor retract the scapula toward the vertebral column (midline). When paralyzed (dorsal scapular nerve injury), the unopposed serratus anterior pulls the scapula laterally away from the midline.'
      },
      {
        id: 'back-3',
        chapterId: 'back-muscles',
        number: 3,
        text: 'Patient was unable to retract his scapula because of paralysis of trapezius and ........',
        source: '2024 - 25',
        options: [
          { id: 'a', text: 'Infraspinatus.' },
          { id: 'b', text: 'Levator scapula.' },
          { id: 'c', text: 'Rhomboids.' },
          { id: 'd', text: 'Serratus posterior superior.' },
          { id: 'e', text: 'Pectoralis minor.' }
        ],
        correctOptionId: 'c',
        explanation: 'Scapular retraction (adduction toward the midline) is produced by the middle fibers of trapezius together with rhomboid major and rhomboid minor.'
      },
      {
        id: 'back-4',
        chapterId: 'back-muscles',
        number: 4,
        text: 'Trapezius muscle is supplied by the .... nerve:',
        source: '2024 - IPKA - DEP BOOK - 2022 - 2021 - 2019',
        options: [
          { id: 'a', text: 'Cranial accessory.' },
          { id: 'b', text: 'Spinal accessory.' },
          { id: 'c', text: 'Long thoracic.' },
          { id: 'd', text: 'Dorsal scapular.' },
          { id: 'e', text: 'Thoracodorsal nerve.' }
        ],
        correctOptionId: 'b',
        explanation: 'Trapezius receives its motor innervation from the spinal part of the accessory nerve (CN XI), while C3 and C4 ventral rami provide proprioceptive fibers.'
      },
      {
        id: 'back-5',
        chapterId: 'back-muscles',
        number: 5,
        text: 'Actions of the latissimus dorsi:',
        source: 'IPKA',
        options: [
          { id: 'a', text: 'Flexes the arm.' },
          { id: 'b', text: 'Abducts the arm.' },
          { id: 'c', text: 'Laterally rotates the arm.' },
          { id: 'd', text: 'All of the above.' },
          { id: 'e', text: 'None of the above.' }
        ],
        correctOptionId: 'e',
        explanation: 'Latissimus dorsi extends, adducts, and medially rotates the humerus at the shoulder joint—the exact opposite of flexion, abduction, and lateral rotation.'
      },
      {
        id: 'back-6',
        chapterId: 'back-muscles',
        number: 6,
        text: 'Rotation of the scapula in raising the arm above head upward due to contraction of; mark the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Trapezius and latissimus dorsi muscles.' },
          { id: 'b', text: 'Serratus anterior and rhomboid muscles.' },
          { id: 'c', text: 'Trapezius and serratus anterior muscles.' },
          { id: 'd', text: 'Trapezius and teres minor muscles.' }
        ],
        correctOptionId: 'c',
        explanation: 'Upward (lateral) rotation of the scapula during overhead abduction (90°–180°) is produced by a force couple between the upper and lower fibers of trapezius and the lower digitations of serratus anterior.'
      },
      {
        id: 'back-7',
        chapterId: 'back-muscles',
        number: 7,
        text: 'Which one of the following muscles can extend the arm?',
        source: 'DEP BOOK - 2022',
        options: [
          { id: 'a', text: 'Infraspinatus.' },
          { id: 'b', text: 'Latissimus dorsi.' },
          { id: 'c', text: 'Clavicular fibers of pectoralis major.' },
          { id: 'd', text: 'Anterior fibers of deltoid.' },
          { id: 'e', text: 'Coracobrachialis.' }
        ],
        correctOptionId: 'b',
        explanation: 'Latissimus dorsi (along with teres major and the posterior fibers of deltoid) is a powerful extensor of the arm at the shoulder joint.'
      },
      {
        id: 'back-8',
        chapterId: 'back-muscles',
        number: 8,
        text: 'Paralysis of the following muscle leads to shoulder drop:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Pectoralis major.' },
          { id: 'b', text: 'Latissimus dorsi.' },
          { id: 'c', text: 'Trapezius.' },
          { id: 'd', text: 'Deltoid.' }
        ],
        correctOptionId: 'c',
        explanation: 'The upper fibers of trapezius support and elevate the lateral end of the clavicle and acromion. Paralysis of trapezius (spinal accessory nerve lesion) causes drooping of the shoulder (shoulder drop), whereas deltoid paralysis causes a flat shoulder.'
      },
      {
        id: 'back-9',
        chapterId: 'back-muscles',
        number: 9,
        text: 'One of the following actions is done by the latissimus dorsi muscle:',
        source: '2021',
        options: [
          { id: 'a', text: 'Flexes the arm.' },
          { id: 'b', text: 'Abducts the arm.' },
          { id: 'c', text: 'Laterally rotates the arm.' },
          { id: 'd', text: 'Extend the arm.' }
        ],
        correctOptionId: 'd',
        explanation: 'Latissimus dorsi extends, adducts, and medially rotates the arm (swimmer\'s/climbing muscle).'
      },
      {
        id: 'back-10',
        chapterId: 'back-muscles',
        number: 10,
        text: 'One of the following muscles elevates the shoulder at the shoulder girdle:',
        source: '2019',
        options: [
          { id: 'a', text: 'Latissimus dorsi.' },
          { id: 'b', text: 'Upper fiber of trapezius.' },
          { id: 'c', text: 'Rhomboid minor.' },
          { id: 'd', text: 'Middle fiber of trapezius.' }
        ],
        correctOptionId: 'b',
        explanation: 'The upper fibers of trapezius (along with levator scapulae) elevate the shoulder girdle (shrugging the shoulders). Note: the PDF key table printed 10-a, which is a known typo indicated by the "x" next to question 10 on page 7; anatomically, the upper fibers of trapezius elevate the shoulder.'
      },
      {
        id: 'back-11',
        chapterId: 'back-muscles',
        number: 11,
        text: 'Thoracodorsal nerve supply the following muscle:',
        source: '2019',
        options: [
          { id: 'a', text: 'Teres major.' },
          { id: 'b', text: 'Trapezius.' },
          { id: 'c', text: 'Latissimus dorsi.' },
          { id: 'd', text: 'Rhomboid minor.' }
        ],
        correctOptionId: 'c',
        explanation: 'The thoracodorsal nerve (middle subscapular nerve, C6–C8, from the posterior cord of the brachial plexus) is the motor nerve to the latissimus dorsi muscle.'
      },
      {
        id: 'back-12',
        chapterId: 'back-muscles',
        number: 12,
        text: 'Mark one true origin of latissimus dorsi muscle:',
        source: '2019',
        options: [
          { id: 'a', text: 'Spine of all lumbar vertebrae.' },
          { id: 'b', text: 'Middle four ribs.' },
          { id: 'c', text: 'Nuchal ligament.' },
          { id: 'd', text: 'Outer lip of iliac crest.' }
        ],
        correctOptionId: 'd',
        explanation: 'Latissimus dorsi originates from the posterior part of the outer lip of the iliac crest, the thoracolumbar fascia (spines of lower 6 thoracic, lumbar, and sacral vertebrae), the lower 3 or 4 ribs, and the inferior angle of the scapula.'
      },
      {
        id: 'back-13',
        chapterId: 'back-muscles',
        number: 13,
        text: 'Muscles that rotate scapula downward are attached to:',
        source: 'DEP BOOK - 2022 - 2021',
        options: [
          { id: 'a', text: 'Dorsal aspect of medial border of scapula.' },
          { id: 'b', text: 'Ventral aspect of medial border of scapula.' },
          { id: 'c', text: 'Upper lip of crest of spine.' },
          { id: 'd', text: 'Lower lip of crest of spine.' },
          { id: 'e', text: 'Tip of the coracoid process.' },
          { id: 'f', text: 'Supraglenoid tubercle of the scapula.' }
        ],
        correctOptionId: 'a',
        explanation: 'Levator scapulae, rhomboid minor, and rhomboid major insert into the dorsal aspect of the medial border of the scapula and rotate the scapula downward (medially), depressing the glenoid cavity.'
      },
      {
        id: 'back-14',
        chapterId: 'back-muscles',
        number: 14,
        text: 'One of the following is not attached to the medial border of the scapula:',
        source: '2021',
        options: [
          { id: 'a', text: 'Levator scapulae.' },
          { id: 'b', text: 'Teres minor.' },
          { id: 'c', text: 'Serratus anterior.' },
          { id: 'd', text: 'Rhomboideus major.' }
        ],
        correctOptionId: 'b',
        explanation: 'Teres minor arises from the upper two-thirds of the dorsal surface of the lateral border of the scapula. Levator scapulae, rhomboid major, and serratus anterior all attach to the medial border.'
      },
      {
        id: 'back-15',
        chapterId: 'back-muscles',
        number: 15,
        text: 'Triangle of auscultation is associated with all of the following EXCEPT:',
        source: 'IPKA',
        options: [
          { id: 'a', text: 'Latissimus dorsi.' },
          { id: 'b', text: 'Teres major.' },
          { id: 'c', text: 'Rhomboid major.' },
          { id: 'd', text: 'Trapezius.' },
          { id: 'e', text: 'Medial border of the scapula.' }
        ],
        correctOptionId: 'b',
        explanation: 'The triangle of auscultation is bounded by trapezius (medially), latissimus dorsi (inferiorly), and the medial border of the scapula (laterally), with rhomboid major in its floor. Teres major is not a boundary.'
      },
      {
        id: 'back-16',
        chapterId: 'back-muscles',
        number: 16,
        text: 'The trapezius attaches to which of the following region of the clavicle?',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Conoid tubercle' },
          { id: 'b', text: 'Lateral one third of clavicle' },
          { id: 'c', text: 'Trapezoid line' },
          { id: 'd', text: 'Quadrangular space' }
        ],
        correctOptionId: 'b',
        explanation: 'The upper fibers of the trapezius insert into the posterior border of the lateral one-third of the clavicle.'
      }
    ]
  },
  {
    id: 'shoulder-scapular-muscles',
    number: 4,
    title: 'Muscles of Shoulder (Scapular) Region',
    regionGroup: 'Shoulder & Axilla',
    description: 'Deltoid, rotator cuff muscles (SITS), teres major, intermuscular spaces (quadrangular, upper and lower triangular spaces), and suprascapular nerve.',
    questions: [
      {
        id: 'scapular-1',
        chapterId: 'shoulder-scapular-muscles',
        number: 1,
        text: 'Regarding the deltoid muscle, mark one correct statement:',
        source: '2019 - 2017 - DEP BOOK',
        options: [
          { id: 'a', text: 'Its middle fibers adduct the arm.' },
          { id: 'b', text: 'Its posterior fibers flex and medially rotate the arm.' },
          { id: 'c', text: 'Its motor nerve arises from lateral cord of brachial plexus.' },
          { id: 'd', text: 'Its paralysis results in a flat shoulder.' }
        ],
        correctOptionId: 'd',
        explanation: 'Deltoid forms the rounded contour of the shoulder. Paralysis of the deltoid (axillary nerve injury) causes atrophy and loss of the normal rounded contour, producing a "flat shoulder" deformity.'
      },
      {
        id: 'scapular-2',
        chapterId: 'shoulder-scapular-muscles',
        number: 2,
        text: 'One of the following muscles is a part of the rotator cuff:',
        source: '2018 - 2017',
        options: [
          { id: 'a', text: 'Deltoid.' },
          { id: 'b', text: 'Teres major.' },
          { id: 'c', text: 'Teres minor.' },
          { id: 'd', text: 'Long head of biceps.' },
          { id: 'e', text: 'Latissimus dorsi.' },
          { id: 'f', text: 'Pectoralis major.' }
        ],
        correctOptionId: 'c',
        explanation: 'The rotator cuff (SITS) muscles are Supraspinatus, Infraspinatus, Teres minor, and Subscapularis. Teres major is not part of the rotator cuff.'
      },
      {
        id: 'scapular-3',
        chapterId: 'shoulder-scapular-muscles',
        number: 3,
        text: 'The suprascapular nerve supplies:',
        source: '2018',
        options: [
          { id: 'a', text: 'Infraspinatus muscle.' },
          { id: 'b', text: 'Subscapularis muscle.' },
          { id: 'c', text: 'Teres minor muscle.' },
          { id: 'd', text: 'Trapezius muscle.' }
        ],
        correctOptionId: 'a',
        explanation: 'The suprascapular nerve (from the upper trunk, C5–C6) passes through the suprascapular and spinoglenoid notches to supply both the supraspinatus and infraspinatus muscles.'
      },
      {
        id: 'scapular-4',
        chapterId: 'shoulder-scapular-muscles',
        number: 4,
        text: 'Paralysis of the deltoid muscle causes:',
        source: '2017',
        options: [
          { id: 'a', text: 'Flat shoulder.' },
          { id: 'b', text: 'Winging of the scapula.' },
          { id: 'c', text: 'Claw hand.' },
          { id: 'd', text: 'Wrist drop.' }
        ],
        correctOptionId: 'a',
        explanation: 'Deltoid paralysis leads to wasting of the shoulder prominence ("flat shoulder") and loss of abduction from 15° to 90°.'
      },
      {
        id: 'scapular-5',
        chapterId: 'shoulder-scapular-muscles',
        number: 5,
        text: 'One of the following muscles is not a rotator cuff muscle:',
        source: '2017 - DEP BOOK - 2022 - 2021',
        options: [
          { id: 'a', text: 'Supraspinatus.' },
          { id: 'b', text: 'Infraspinatus.' },
          { id: 'c', text: 'Teres minor.' },
          { id: 'd', text: 'Teres major.' },
          { id: 'e', text: 'Subscapularis.' }
        ],
        correctOptionId: 'd',
        explanation: 'Teres major inserts into the medial lip of the bicipital groove and does not fuse with the shoulder joint capsule; therefore it is not a rotator cuff muscle.'
      },
      {
        id: 'scapular-6',
        chapterId: 'shoulder-scapular-muscles',
        number: 6,
        text: 'Injury of the suprascapular nerve results in paralysis of:',
        source: '2017',
        options: [
          { id: 'a', text: 'Deltoid.' },
          { id: 'b', text: 'Infraspinatus.' },
          { id: 'c', text: 'Serratus anterior.' },
          { id: 'd', text: 'Pectoralis major.' }
        ],
        correctOptionId: 'b',
        explanation: 'The suprascapular nerve innervates supraspinatus and infraspinatus; injury causes weakness in initiating abduction (supraspinatus) and lateral rotation of the arm (infraspinatus).'
      },
      {
        id: 'scapular-7',
        chapterId: 'shoulder-scapular-muscles',
        number: 7,
        text: 'Which of the following structures passes through the upper triangular space of the scapular region:',
        source: '2017',
        options: [
          { id: 'a', text: 'Circumflex scapular artery.' },
          { id: 'b', text: 'Axillary nerve.' },
          { id: 'c', text: 'Posterior circumflex humeral.' },
          { id: 'd', text: 'Profunda brachii.' }
        ],
        correctOptionId: 'a',
        explanation: 'The upper (medial) triangular space is bounded by teres minor (superiorly), teres major (inferiorly), and the long head of triceps (laterally). It transmits the circumflex scapular artery and vein.'
      },
      {
        id: 'scapular-8',
        chapterId: 'shoulder-scapular-muscles',
        number: 8,
        text: 'Which muscle is a lateral rotator of the arm?',
        source: '2016',
        options: [
          { id: 'a', text: 'Coracobrachialis.' },
          { id: 'b', text: 'Infraspinatus.' },
          { id: 'c', text: 'Subscapularis.' },
          { id: 'd', text: 'Supraspinatus.' }
        ],
        correctOptionId: 'b',
        explanation: 'Infraspinatus (along with teres minor and posterior fibers of deltoid) laterally rotates the arm at the shoulder joint.'
      },
      {
        id: 'scapular-9',
        chapterId: 'shoulder-scapular-muscles',
        number: 9,
        text: 'Which muscle is a medial rotator of the arm?',
        source: '2016 - 2024',
        options: [
          { id: 'a', text: 'Coracobrachialis.' },
          { id: 'b', text: 'Infraspinatus.' },
          { id: 'c', text: 'Subscapularis.' },
          { id: 'd', text: 'Supraspinatus.' }
        ],
        correctOptionId: 'c',
        explanation: 'Subscapularis inserts into the lesser tuberosity of the humerus and is the primary rotator cuff muscle for medial (internal) rotation of the arm.'
      },
      {
        id: 'scapular-10',
        chapterId: 'shoulder-scapular-muscles',
        number: 10,
        text: 'Concerning the muscles of the rotator cuff:',
        source: '2024 - 2025',
        options: [
          { id: 'a', text: 'Infraspinatus acts as a medial rotator at the shoulder.' },
          { id: 'b', text: 'The subscapularis is intimately related to the subacromial bursa.' },
          { id: 'c', text: 'The supraspinatus is supplied by a branch of the posterior cord of the brachial plexus.' },
          { id: 'd', text: 'They are the main factor in stabilizing the shoulder joint.' }
        ],
        correctOptionId: 'd',
        explanation: 'Because the glenoid cavity is shallow, the tone of the rotator cuff (SITS) tendons fusing with the joint capsule is the primary dynamic factor stabilizing the humeral head in the glenoid fossa.'
      },
      {
        id: 'scapular-11',
        chapterId: 'shoulder-scapular-muscles',
        number: 11,
        text: 'Clavicular part of deltoid is associated with:',
        source: '2024',
        options: [
          { id: 'a', text: 'Lateral rotation.' },
          { id: 'b', text: 'Medial rotation.' },
          { id: 'c', text: 'Abduction.' },
          { id: 'd', text: 'Adduction.' }
        ],
        correctOptionId: 'b',
        explanation: 'The anterior (clavicular) fibers of the deltoid flex and medially rotate the arm, acting synergistically with the clavicular head of pectoralis major.'
      },
      {
        id: 'scapular-12',
        chapterId: 'shoulder-scapular-muscles',
        number: 12,
        text: 'What muscles are necessary to raise the arm above the shoulder?',
        source: '2024 - 2022 - 2021',
        options: [
          { id: 'a', text: 'First the deltoid, next the supraspinatus, and then the serratus anterior.' },
          { id: 'b', text: 'First the supraspinatus, next the deltoid, and then the serratus anterior.' },
          { id: 'c', text: 'First the supraspinatus, next the serratus anterior, and then the deltoid.' },
          { id: 'd', text: 'First the serratus anterior, next the deltoid and then the supraspinatus.' }
        ],
        correctOptionId: 'b',
        explanation: 'Abduction of the arm occurs in three sequential phases: 0°–15° is initiated by supraspinatus, 15°–90° is performed by the middle fibers of deltoid, and 90°–180° (raising above the shoulder) requires upward rotation of the scapula by serratus anterior and trapezius.'
      },
      {
        id: 'scapular-13',
        chapterId: 'shoulder-scapular-muscles',
        number: 13,
        text: 'The rotator cuff muscles attached to the greater tuberosity of the humerus include the following except:',
        source: '2024',
        options: [
          { id: 'a', text: 'Supraspinatus.' },
          { id: 'b', text: 'Infraspinatus.' },
          { id: 'c', text: 'Teres minor.' },
          { id: 'd', text: 'Subscapularis.' }
        ],
        correctOptionId: 'd',
        explanation: 'Supraspinatus, infraspinatus, and teres minor (SIT) insert into the greater tuberosity of the humerus (superior, middle, and inferior impressions), whereas subscapularis inserts into the lesser tuberosity.'
      },
      {
        id: 'scapular-14',
        chapterId: 'shoulder-scapular-muscles',
        number: 14,
        text: 'Paralysis of the deltoid muscle causes:',
        source: 'IPKA - 2022',
        options: [
          { id: 'a', text: 'Loss of abduction of the arm from zero to 15°.' },
          { id: 'b', text: 'Loss of abduction of the arm from 15° - 90°.' },
          { id: 'c', text: 'Loss of abduction of the arm from zero to 90°.' },
          { id: 'd', text: 'Loss of abduction of the arm from 90 - 180°.' },
          { id: 'e', text: 'None of the above.' }
        ],
        correctOptionId: 'b',
        explanation: 'The multipennate middle fibers of the deltoid are responsible for abducting the arm from 15° to 90°.'
      },
      {
        id: 'scapular-15',
        chapterId: 'shoulder-scapular-muscles',
        number: 15,
        text: 'The following muscle is attached to lateral border of scapula:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'The serratus anterior muscle.' },
          { id: 'b', text: 'The teres major muscle.' },
          { id: 'c', text: 'The levator scapulae muscle.' },
          { id: 'd', text: 'The rhomboid major muscle.' }
        ],
        correctOptionId: 'b',
        explanation: 'Teres major arises from the lower third of the dorsal surface of the lateral border and inferior angle of the scapula. Serratus anterior, levator scapulae, and rhomboid major attach to the medial border.'
      },
      {
        id: 'scapular-16',
        chapterId: 'shoulder-scapular-muscles',
        number: 16,
        text: 'Which of following muscles is inserted into greater tuberosity?',
        source: 'DEP BOOK - 2019',
        options: [
          { id: 'a', text: 'Subscapularis muscle.' },
          { id: 'b', text: 'Teres minor muscle.' },
          { id: 'c', text: 'Teres major muscle.' },
          { id: 'd', text: 'Latissimus dorsi muscle.' }
        ],
        correctOptionId: 'b',
        explanation: 'Teres minor inserts into the lowest impression on the greater tuberosity of the humerus.'
      },
      {
        id: 'scapular-17',
        chapterId: 'shoulder-scapular-muscles',
        number: 17,
        text: 'The greater tuberosity of the humerus, choose correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Gives attachment to subscapularis.' },
          { id: 'b', text: 'Gives attachment to pectoralis major.' },
          { id: 'c', text: 'Gives attachment to teres minor.' },
          { id: 'd', text: 'Gives attachment to teres major.' }
        ],
        correctOptionId: 'c',
        explanation: 'The greater tuberosity gives attachment to supraspinatus, infraspinatus, and teres minor.'
      },
      {
        id: 'scapular-18',
        chapterId: 'shoulder-scapular-muscles',
        number: 18,
        text: 'The following muscle abducts the arm from 0-15°:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Upper and lower fibers of trapezius muscle.' },
          { id: 'b', text: 'Supraspinatus muscle.' },
          { id: 'c', text: 'Infraspinatus muscle.' },
          { id: 'd', text: 'Deltoid muscle.' }
        ],
        correctOptionId: 'b',
        explanation: 'Supraspinatus initiates abduction of the humerus for the first 15 degrees, bringing the deltoid into mechanical advantage.'
      },
      {
        id: 'scapular-19',
        chapterId: 'shoulder-scapular-muscles',
        number: 19,
        text: 'The following muscle can extend the arm:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Pectoralis major muscle.' },
          { id: 'b', text: 'Teres major muscle.' },
          { id: 'c', text: 'Biceps brachii muscle.' },
          { id: 'd', text: 'Coracobrachialis muscle.' }
        ],
        correctOptionId: 'b',
        explanation: 'Teres major extends, adducts, and medially rotates the arm, whereas pectoralis major (clavicular head), biceps brachii, and coracobrachialis flex the arm.'
      },
      {
        id: 'scapular-20',
        chapterId: 'shoulder-scapular-muscles',
        number: 20,
        text: 'The following muscle can abduct the arm:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Pectoralis major muscle.' },
          { id: 'b', text: 'Teres major muscle.' },
          { id: 'c', text: 'Supraspinatus.' },
          { id: 'd', text: 'Latissimus dorsi.' }
        ],
        correctOptionId: 'c',
        explanation: 'Supraspinatus abducts the arm (0°–15°), while pectoralis major, teres major, and latissimus dorsi are all adductors.'
      },
      {
        id: 'scapular-21',
        chapterId: 'shoulder-scapular-muscles',
        number: 21,
        text: 'One of the following muscles is a rotator cuff muscle:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Infraspinatus.' },
          { id: 'b', text: 'Pectoralis major.' },
          { id: 'c', text: 'Serratus anterior.' },
          { id: 'd', text: 'Teres major.' }
        ],
        correctOptionId: 'a',
        explanation: 'Infraspinatus is one of the four rotator cuff muscles (SITS).'
      },
      {
        id: 'scapular-22',
        chapterId: 'shoulder-scapular-muscles',
        number: 22,
        text: 'Deltoid muscle fibers are:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Parallel muscle fibers.' },
          { id: 'b', text: 'Unipennate muscle fibers.' },
          { id: 'c', text: 'Multipennate muscle fibers.' },
          { id: 'd', text: 'Circumpennate muscle fibers.' }
        ],
        correctOptionId: 'c',
        explanation: 'The middle (acromial) part of the deltoid muscle has a classic multipennate fiber arrangement to maximize cross-sectional force during shoulder abduction.'
      },
      {
        id: 'scapular-23',
        chapterId: 'shoulder-scapular-muscles',
        number: 23,
        text: 'The deltoid muscle, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Arises from clavicle, acromion and coracoid process.' },
          { id: 'b', text: 'Is inserted into deltoid tuberosity.' },
          { id: 'c', text: 'Is innervated by radial nerve.' },
          { id: 'd', text: 'Its middle fibers induce lateral rotation of scapula.' }
        ],
        correctOptionId: 'b',
        explanation: 'Deltoid arises from the anterior border of the lateral third of the clavicle, lateral border of the acromion, and lower lip of the crest of the spine of the scapula, and inserts into the V-shaped deltoid tuberosity on the lateral aspect of the mid-shaft of the humerus.'
      },
      {
        id: 'scapular-24',
        chapterId: 'shoulder-scapular-muscles',
        number: 24,
        text: 'Lower (lateral) triangular space of axilla, choose correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Upper border by teres minor.' },
          { id: 'b', text: 'Medial border by lateral head of triceps.' },
          { id: 'c', text: 'Transmits radial nerve and profunda brachii artery.' },
          { id: 'd', text: 'Transmits median nerve and radial recurrent artery.' }
        ],
        correctOptionId: 'c',
        explanation: 'The lower triangular space (triangular interval) is bounded superiorly by teres major, medially by the long head of triceps, and laterally by the shaft of the humerus. It transmits the radial nerve and profunda brachii vessels into the radial groove.'
      },
      {
        id: 'scapular-25',
        chapterId: 'shoulder-scapular-muscles',
        number: 25,
        text: 'Which muscles are innervated by the axillary nerve?',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Supraspinatus and infraspinatus muscles.' },
          { id: 'b', text: 'Deltoid and teres minor muscles.' },
          { id: 'c', text: 'Pectoralis major and pectoralis minor muscles.' },
          { id: 'd', text: 'Latissimus dorsi and teres major muscles.' }
        ],
        correctOptionId: 'b',
        explanation: 'The axillary nerve (C5, C6) innervates two muscles: the deltoid and teres minor.'
      },
      {
        id: 'scapular-26',
        chapterId: 'shoulder-scapular-muscles',
        number: 26,
        text: 'Middle third of humerus, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Deltoid tuberosity, laterally.' },
          { id: 'b', text: 'Coracobrachialis insertion laterally.' },
          { id: 'c', text: 'Spiral groove anteriorly.' },
          { id: 'd', text: 'Bicipital groove posteriorly.' }
        ],
        correctOptionId: 'a',
        explanation: 'On the middle third of the shaft of the humerus, the deltoid tuberosity lies laterally, the coracobrachialis insertion lies medially, and the spiral (radial) groove lies posteriorly.'
      },
      {
        id: 'scapular-27',
        chapterId: 'shoulder-scapular-muscles',
        number: 27,
        text: 'Which of the following bones is a flat bone:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Humerus.' },
          { id: 'b', text: 'Scapula.' },
          { id: 'c', text: 'Ulna.' },
          { id: 'd', text: 'Clavicle.' }
        ],
        correctOptionId: 'b',
        explanation: 'The scapula is a triangular flat bone lying on the posterolateral aspect of the thoracic cage opposite ribs 2 to 7.'
      },
      {
        id: 'scapular-28',
        chapterId: 'shoulder-scapular-muscles',
        number: 28,
        text: 'Paralysis of the following muscle leads to flat shoulder:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Pectoralis major.' },
          { id: 'b', text: 'Latissimus dorsi.' },
          { id: 'c', text: 'Trapezius.' },
          { id: 'd', text: 'Deltoid.' }
        ],
        correctOptionId: 'd',
        explanation: 'Paralysis of the deltoid muscle causes loss of the normal rounded contour of the shoulder (flat shoulder).'
      },
      {
        id: 'scapular-29',
        chapterId: 'shoulder-scapular-muscles',
        number: 29,
        text: 'Principal muscle concerned in lateral rotation of the shoulder:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Pectoralis major.' },
          { id: 'b', text: 'Deltoid anterior fibers.' },
          { id: 'c', text: 'Teres major.' },
          { id: 'd', text: 'Teres minor.' }
        ],
        correctOptionId: 'd',
        explanation: 'Among the choices, teres minor is the only lateral rotator of the shoulder; pectoralis major, anterior deltoid, and teres major are all medial rotators.'
      },
      {
        id: 'scapular-30',
        chapterId: 'shoulder-scapular-muscles',
        number: 30,
        text: 'Deltoid muscle, choose the incorrect answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Multipennate.' },
          { id: 'b', text: 'Attached to surgical neck of humerus.' },
          { id: 'c', text: 'Can be paralyzed following fracture to surgical neck of humerus.' },
          { id: 'd', text: 'Is paralyzed following complete tear of upper trunk of brachial plexus.' }
        ],
        correctOptionId: 'b',
        explanation: 'The deltoid inserts into the deltoid tuberosity on the middle of the lateral surface of the humeral shaft, NOT the surgical neck (though the axillary nerve supplying it winds around the surgical neck).'
      },
      {
        id: 'scapular-31',
        chapterId: 'shoulder-scapular-muscles',
        number: 31,
        text: 'Injury to quadrangular intermuscular space of axillary region may endanger:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Posterior circumflex humeral artery & radial nerve.' },
          { id: 'b', text: 'Posterior circumflex humeral artery & axillary nerve.' },
          { id: 'c', text: 'Radial nerve & profunda brachii artery.' },
          { id: 'd', text: 'Profunda brachii artery & axillary nerve.' }
        ],
        correctOptionId: 'b',
        explanation: 'The quadrangular space transmits the axillary nerve and the posterior circumflex humeral artery and vein.'
      },
      {
        id: 'scapular-32',
        chapterId: 'shoulder-scapular-muscles',
        number: 32,
        text: 'The only rotator cuff muscle that does not contribute to arm rotation is:',
        source: 'DEP BOOK - 2021',
        options: [
          { id: 'a', text: 'Teres minor.' },
          { id: 'b', text: 'Infraspinatus.' },
          { id: 'c', text: 'Supraspinatus.' },
          { id: 'd', text: 'Subscapularis.' }
        ],
        correctOptionId: 'c',
        explanation: 'Supraspinatus passes superior to the shoulder joint to insert into the highest impression on the greater tuberosity and acts purely as an abductor (0°–15°), without rotating the humerus.'
      },
      {
        id: 'scapular-33',
        chapterId: 'shoulder-scapular-muscles',
        number: 33,
        text: 'All of the following muscles attach to medial border of scapula except:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Levator scapulae.' },
          { id: 'b', text: 'Rhomboideus major.' },
          { id: 'c', text: 'Teres major.' },
          { id: 'd', text: 'Serratus anterior.' }
        ],
        correctOptionId: 'c',
        explanation: 'Teres major attaches to the lower third of the dorsal surface of the lateral border of the scapula, whereas levator scapulae, rhomboid major, and serratus anterior attach to the medial border.'
      },
      {
        id: 'scapular-34',
        chapterId: 'shoulder-scapular-muscles',
        number: 34,
        text: 'Suprascapular nerve supplies:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Muscle inserted into back of inferior angle of scapula.' },
          { id: 'b', text: 'Muscle inserted into lesser tuberosity of humerus.' },
          { id: 'c', text: 'Muscle that initiates abduction of arm.' },
          { id: 'd', text: 'Muscle inserted into floor of bicipital groove.' }
        ],
        correctOptionId: 'c',
        explanation: 'The suprascapular nerve supplies the supraspinatus muscle, which initiates abduction of the arm (0°–15°), as well as the infraspinatus.'
      },
      {
        id: 'scapular-35',
        chapterId: 'shoulder-scapular-muscles',
        number: 35,
        text: 'Muscles that rotate scapula downward are attached to:',
        source: 'DEP BOOK - 2022 - 2021',
        options: [
          { id: 'a', text: 'Dorsal aspect of medial border of scapula.' },
          { id: 'b', text: 'Ventral aspect of medial border of scapula.' },
          { id: 'c', text: 'Upper lip of crest of spine.' },
          { id: 'd', text: 'Lower lip of crest of spine.' },
          { id: 'e', text: 'Tip of the coracoid process.' },
          { id: 'f', text: 'Supraglenoid tubercle of the scapula.' }
        ],
        correctOptionId: 'a',
        explanation: 'Levator scapulae and the rhomboids attach to the dorsal aspect of the medial border of the scapula and rotate the glenoid cavity downward.'
      },
      {
        id: 'scapular-36',
        chapterId: 'shoulder-scapular-muscles',
        number: 36,
        text: 'All muscles attached to bicipital intertubercular groove can produce:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Abduction of arm (shoulder joint).' },
          { id: 'b', text: 'Adduction of arm.' },
          { id: 'c', text: 'Extension of arm.' },
          { id: 'd', text: 'Lateral rotation of arm.' }
        ],
        correctOptionId: 'b',
        explanation: 'All three muscles attaching to the bicipital groove—pectoralis major (lateral lip), latissimus dorsi (floor), and teres major (medial lip)—produce adduction and medial rotation of the arm.'
      },
      {
        id: 'scapular-37',
        chapterId: 'shoulder-scapular-muscles',
        number: 37,
        text: 'Which of the following muscles does not rotate arm medially (or internally)?',
        source: 'DEP',
        options: [
          { id: 'a', text: 'Subscapularis.' },
          { id: 'b', text: 'Supraspinatus.' },
          { id: 'c', text: 'Latissimus dorsi.' },
          { id: 'd', text: 'Pectoralis major.' }
        ],
        correctOptionId: 'b',
        explanation: 'Supraspinatus abducts the arm from 0° to 15° and does not rotate the humerus. Subscapularis, latissimus dorsi, and pectoralis major are all medial rotators.'
      },
      {
        id: 'scapular-38',
        chapterId: 'shoulder-scapular-muscles',
        number: 38,
        text: 'The lesser tuberosity of the humerus gives attachment to the following muscle:',
        source: '22 - 21',
        options: [
          { id: 'a', text: 'Supraspinatus.' },
          { id: 'b', text: 'Infraspinatus.' },
          { id: 'c', text: 'Teres major.' },
          { id: 'd', text: 'Subscapularis.' },
          { id: 'e', text: 'Teres minor.' }
        ],
        correctOptionId: 'd',
        explanation: 'The subscapularis muscle inserts into the lesser tuberosity of the humerus.'
      },
      {
        id: 'scapular-39',
        chapterId: 'shoulder-scapular-muscles',
        number: 39,
        text: 'Which muscle initiates abduction of the shoulder?',
        source: '22 - 21',
        options: [
          { id: 'a', text: 'Infraspinatus.' },
          { id: 'b', text: 'Latissimus dorsi.' },
          { id: 'c', text: 'Supraspinatus.' },
          { id: 'd', text: 'Deltoid.' }
        ],
        correctOptionId: 'c',
        explanation: 'Supraspinatus initiates shoulder abduction (0°–15°).'
      },
      {
        id: 'scapular-40',
        chapterId: 'shoulder-scapular-muscles',
        number: 40,
        text: 'Which rotator cuff muscle does NOT rotate the humerus?',
        source: '2021',
        options: [
          { id: 'a', text: 'Supraspinatus.' },
          { id: 'b', text: 'Infraspinatus.' },
          { id: 'c', text: 'Teres minor.' },
          { id: 'd', text: 'Subscapularis.' }
        ],
        correctOptionId: 'a',
        explanation: 'Supraspinatus abducts the humerus without rotating it, whereas infraspinatus and teres minor laterally rotate it and subscapularis medially rotates it.'
      },
      {
        id: 'scapular-41',
        chapterId: 'shoulder-scapular-muscles',
        number: 41,
        text: 'The deltoid, choose the correct answer:',
        source: '2021',
        options: [
          { id: 'a', text: 'Is supplied by the suprascapular nerve.' },
          { id: 'b', text: 'Has a multipennate arrangement for maximal range of movement.' },
          { id: 'c', text: 'Inserts into the bicipital groove.' },
          { id: 'd', text: 'Is unipennate.' }
        ],
        correctOptionId: 'b',
        explanation: 'The middle fibers of the deltoid have a multipennate arrangement (Per key: b; note that multipennate fibers provide maximal strength during abduction).'
      },
      {
        id: 'scapular-42',
        chapterId: 'shoulder-scapular-muscles',
        number: 42,
        text: 'The teres major muscle is supplied by the following nerve:',
        source: '2019',
        options: [
          { id: 'a', text: 'Suprascapular nerve.' },
          { id: 'b', text: 'Lower subscapular nerve.' },
          { id: 'c', text: 'Upper subscapular nerve.' },
          { id: 'd', text: 'Dorsal scapular nerve.' }
        ],
        correctOptionId: 'b',
        explanation: 'Teres major is innervated by the lower subscapular nerve (C5, C6), a branch of the posterior cord of the brachial plexus (which also supplies the lower part of subscapularis).'
      },
      {
        id: 'scapular-43',
        chapterId: 'shoulder-scapular-muscles',
        number: 43,
        text: 'As regards the muscles of the upper limb, one is correct:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'The deltoid is supplied by the axillary nerve.' },
          { id: 'b', text: 'All interossei are supplied by the median nerve.' },
          { id: 'c', text: 'Dorsal interossei are adductors of the fingers.' },
          { id: 'd', text: 'Flexor digitorum superficialis flexes terminal interphalangeal joints.' }
        ],
        correctOptionId: 'a',
        explanation: 'The deltoid is supplied by the axillary nerve (C5, C6). All interossei are supplied by the deep branch of the ulnar nerve, dorsal interossei abduct the fingers (DAB), and FDS flexes the proximal interphalangeal joints.'
      },
      {
        id: 'scapular-44',
        chapterId: 'shoulder-scapular-muscles',
        number: 44,
        text: 'The deltopectoral groove contains:',
        source: 'IPKA - 2022 - 2021',
        options: [
          { id: 'a', text: 'Deltoid branch of the lateral thoracic artery.' },
          { id: 'b', text: 'Cephalic vein.' },
          { id: 'c', text: 'Apical group of axillary lymph nodes.' },
          { id: 'd', text: 'Subscapular artery.' },
          { id: 'e', text: 'All of the above.' },
          { id: 'f', text: 'None of the above.' }
        ],
        correctOptionId: 'b',
        explanation: 'The deltopectoral groove (between deltoid and pectoralis major) contains the cephalic vein, the deltoid branch of the thoracoacromial artery, and the infraclavicular (deltopectoral) lymph nodes.'
      },
      {
        id: 'scapular-45',
        chapterId: 'shoulder-scapular-muscles',
        number: 45,
        text: 'Regarding quadrangular space in axillary region; one is correct:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'It is bounded above by the supraspinatus.' },
          { id: 'b', text: 'It is bounded laterally by the surgical neck of the humerus.' },
          { id: 'c', text: 'It is bounded below by the teres minor.' },
          { id: 'd', text: 'It contains the circumflex scapular artery.' }
        ],
        correctOptionId: 'b',
        explanation: 'The quadrangular space is bounded superiorly by subscapularis (anteriorly) and teres minor (posteriorly), inferiorly by teres major, medially by the long head of triceps, and laterally by the surgical neck of the humerus.'
      },
      {
        id: 'scapular-46',
        chapterId: 'shoulder-scapular-muscles',
        number: 46,
        text: 'Structures passing through the quadrangular space of the axilla; mark the correct answer:',
        source: 'DEP BOOK - 2019',
        options: [
          { id: 'a', text: 'The axillary nerve and posterior circumflex humeral artery.' },
          { id: 'b', text: 'The axillary nerve and anterior circumflex humeral artery.' },
          { id: 'c', text: 'The axillary nerve and circumflex scapular artery.' },
          { id: 'd', text: 'The axillary nerve and musculocutaneous nerve.' }
        ],
        correctOptionId: 'a',
        explanation: 'The axillary nerve and the posterior circumflex humeral vessels pass backward through the quadrangular space.'
      },
      {
        id: 'scapular-47',
        chapterId: 'shoulder-scapular-muscles',
        number: 47,
        text: 'Muscle that forms bulk of anterior axillary fold is:',
        source: 'DEP BOOK - 2021',
        options: [
          { id: 'a', text: 'Latissimus dorsi.' },
          { id: 'b', text: 'Pectoralis major.' },
          { id: 'c', text: 'Subscapularis.' },
          { id: 'd', text: 'Teres major.' }
        ],
        correctOptionId: 'b',
        explanation: 'The rounded lower border of pectoralis major forms the anterior axillary fold, whereas latissimus dorsi and teres major form the posterior axillary fold.'
      },
      {
        id: 'scapular-48',
        chapterId: 'shoulder-scapular-muscles',
        number: 48,
        text: 'The quadrangular space is bounded by all the following except:',
        source: '2022',
        options: [
          { id: 'a', text: 'Teres minor.' },
          { id: 'b', text: 'Teres major.' },
          { id: 'c', text: 'Long head of biceps.' },
          { id: 'd', text: 'Surgical neck of the humerus.' }
        ],
        correctOptionId: 'c',
        explanation: 'The medial boundary of the quadrangular space is formed by the long head of the triceps brachii, NOT the long head of the biceps.'
      },
      {
        id: 'scapular-49',
        chapterId: 'shoulder-scapular-muscles',
        number: 49,
        text: 'Which of the following is true regarding the quadrangular space?',
        source: '2021',
        options: [
          { id: 'a', text: 'Bounded superiorly by the teres major.' },
          { id: 'b', text: 'Bounded inferiorly by the subscapularis and teres minor.' },
          { id: 'c', text: 'Bounded medially by the humerus and laterally by the long head of the triceps.' },
          { id: 'd', text: 'Contains the posterior circumflex humeral artery and the axillary nerve.' }
        ],
        correctOptionId: 'd',
        explanation: 'The quadrangular space transmits the axillary nerve and posterior circumflex humeral vessels.'
      },
      {
        id: 'scapular-50',
        chapterId: 'shoulder-scapular-muscles',
        number: 50,
        text: 'A person has a fracture of the upper end of humerus. During the repair the surgeon ties off the artery traveling through the quadrangular space to stop the hemorrhage. Which artery did he ligate?',
        source: '2024',
        options: [
          { id: 'a', text: 'Dorsal scapular.' },
          { id: 'b', text: 'Posterior circumflex humeral.' },
          { id: 'c', text: 'Scapular circumflex.' },
          { id: 'd', text: 'Subscapular.' }
        ],
        correctOptionId: 'b',
        explanation: 'The posterior circumflex humeral artery travels with the axillary nerve through the quadrangular space and winds around the surgical neck of the humerus.'
      },
      {
        id: 'scapular-51',
        chapterId: 'shoulder-scapular-muscles',
        number: 51,
        text: 'The quadrangular space transmits:',
        source: '2025',
        options: [
          { id: 'a', text: 'Axillary artery' },
          { id: 'b', text: 'Lower subscapular artery' },
          { id: 'c', text: 'Profunda brachii vessels' },
          { id: 'd', text: 'Posterior circumflex humeral artery' }
        ],
        correctOptionId: 'd',
        explanation: 'The quadrangular space transmits the posterior circumflex humeral artery and vein along with the axillary nerve.'
      }
    ]
  },
  {
    id: 'axilla',
    number: 5,
    title: 'Axilla',
    regionGroup: 'Shoulder & Axilla',
    description: 'Boundaries (anterior, posterior, medial, lateral walls, apex, and base) and contents of the axilla, cervico-axillary canal, and suspensory ligament.',
    questions: [
      {
        id: 'axilla-1',
        chapterId: 'axilla',
        number: 1,
        text: 'Which of the following muscles forms part of the lateral wall of the axilla:',
        source: '2018',
        options: [
          { id: 'a', text: 'Subclavius.' },
          { id: 'b', text: 'Long head of biceps.' },
          { id: 'c', text: 'Short head of biceps.' },
          { id: 'd', text: 'Teres minor.' }
        ],
        correctOptionId: 'c',
        explanation: 'The narrow lateral wall of the axilla is formed by the intertubercular (bicipital) groove of the humerus, coracobrachialis, and the short head of the biceps brachii.'
      },
      {
        id: 'axilla-2',
        chapterId: 'axilla',
        number: 2,
        text: 'The anterior fold of axilla is formed by:',
        source: '2017 - DEP BOOK - 2019',
        options: [
          { id: 'a', text: 'Pectoralis minor muscle only.' },
          { id: 'b', text: 'Pectoralis major muscle only.' },
          { id: 'c', text: 'Subclavius and pectoralis minor muscles.' },
          { id: 'd', text: 'Pectoral muscles and subclavius.' },
          { id: 'e', text: 'Pectoralis major and minor muscles.' },
          { id: 'f', text: 'Deltoid muscle.' },
          { id: 'g', text: 'Subclavius.' },
          { id: 'h', text: 'Clavipectoral fascia.' }
        ],
        correctOptionId: 'b',
        explanation: 'The anterior axillary fold is formed by the rounded lower border of the pectoralis major muscle (while the entire anterior wall is formed by pectoralis major, pectoralis minor, subclavius, and clavipectoral fascia).'
      },
      {
        id: 'axilla-3',
        chapterId: 'axilla',
        number: 3,
        text: 'The posterior wall of axilla is formed by:',
        source: '2024 - 2025',
        options: [
          { id: 'a', text: 'Pectoralis minor.' },
          { id: 'b', text: 'Teres major.' },
          { id: 'c', text: 'Supraspinatus.' },
          { id: 'd', text: 'Serratus anterior.' }
        ],
        correctOptionId: 'b',
        explanation: 'The posterior wall of the axilla is formed by three muscles: subscapularis (above), and teres major and latissimus dorsi (below).'
      },
      {
        id: 'axilla-4',
        chapterId: 'axilla',
        number: 4,
        text: 'The axilla contains (contents) all of the following EXCEPT:',
        source: '2024 - 2021',
        options: [
          { id: 'a', text: 'Axillary artery.' },
          { id: 'b', text: 'Axillary vein.' },
          { id: 'c', text: 'Trunks of the brachial plexus.' },
          { id: 'd', text: 'Fat.' },
          { id: 'e', text: 'Tail of the breast.' }
        ],
        correctOptionId: 'c',
        explanation: 'The roots and trunks of the brachial plexus lie in the posterior triangle of the neck (supraclavicular part). Only the cords and branches of the brachial plexus (infraclavicular part) are located inside the axilla.'
      },
      {
        id: 'axilla-5',
        chapterId: 'axilla',
        number: 5,
        text: 'The anterior wall of the axilla is formed by all of the following EXCEPT:',
        source: 'IPKA - 2021',
        options: [
          { id: 'a', text: 'Pectoralis major.' },
          { id: 'b', text: 'Teres major.' },
          { id: 'c', text: 'Pectoralis minor.' },
          { id: 'd', text: 'Subclavius.' },
          { id: 'e', text: 'Clavipectoral fascia.' }
        ],
        correctOptionId: 'b',
        explanation: 'Teres major is part of the posterior wall of the axilla. The anterior wall comprises pectoralis major (superficial layer) and subclavius, pectoralis minor, and clavipectoral fascia (deep layer).'
      },
      {
        id: 'axilla-6',
        chapterId: 'axilla',
        number: 6,
        text: 'The suspensory ligament of axilla, mark correct statement:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Continuation of the deep fascia of the neck.' },
          { id: 'b', text: 'Continuation of axillary sheath.' },
          { id: 'c', text: 'Continuation of clavipectoral fascia.' },
          { id: 'd', text: 'Continuation of suprapleural membrane.' }
        ],
        correctOptionId: 'c',
        explanation: 'The suspensory ligament of the axilla is the downward continuation of the clavipectoral fascia below the lower border of pectoralis minor, attaching to the axillary fascia to pull up the hollow of the armpit.'
      },
      {
        id: 'axilla-7',
        chapterId: 'axilla',
        number: 7,
        text: 'Which one of the following nerves innervates a muscle that abducts shoulder from 15 to 90 degrees?',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Radial nerve.' },
          { id: 'b', text: 'Ulnar.' },
          { id: 'c', text: 'Axillary nerve.' },
          { id: 'd', text: 'Suprascapular nerve.' }
        ],
        correctOptionId: 'c',
        explanation: 'The deltoid muscle abducts the shoulder from 15° to 90° and is innervated by the axillary nerve.'
      },
      {
        id: 'axilla-8',
        chapterId: 'axilla',
        number: 8,
        text: 'Upper (medial) triangular space of axilla, choose correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Upper border by teres minor.' },
          { id: 'b', text: 'Lower border by subscapularis.' },
          { id: 'c', text: 'Transmits axillary nerve.' },
          { id: 'd', text: 'Transmits lower subscapular nerve.' }
        ],
        correctOptionId: 'a',
        explanation: 'The upper (medial) triangular space is bounded superiorly by teres minor (and subscapularis anteriorly), inferiorly by teres major, and laterally by the long head of triceps; it transmits the circumflex scapular vessels.'
      },
      {
        id: 'axilla-9',
        chapterId: 'axilla',
        number: 9,
        text: 'Regarding the axilla:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Posterior wall is formed of subscapularis, teres minor, latissimus dorsi.' },
          { id: 'b', text: 'It contains the roots of the brachial plexus.' },
          { id: 'c', text: 'Pectoralis major & minor share in the formation of its anterior wall.' },
          { id: 'd', text: 'The medial wall is the shortest wall.' }
        ],
        correctOptionId: 'c',
        explanation: 'Pectoralis major and minor share in forming the anterior wall of the axilla. Its posterior wall includes teres major (not teres minor), it contains the cords (not roots) of the brachial plexus, and the lateral wall is the narrowest wall.'
      },
      {
        id: 'axilla-10',
        chapterId: 'axilla',
        number: 10,
        text: 'The cervico-axillary canal, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Bounded medially by inner border first rib.' },
          { id: 'b', text: 'Bounded posteriorly by upper border of scapula.' },
          { id: 'c', text: 'The roots of brachial plexus pass through it.' },
          { id: 'd', text: 'Transmits subclavian vessels.' }
        ],
        correctOptionId: 'b',
        explanation: 'The apex of the axilla (cervico-axillary canal) is bounded anteriorly by the clavicle, medially by the outer border of the first rib, and posteriorly by the superior border of the scapula.'
      },
      {
        id: 'axilla-11',
        chapterId: 'axilla',
        number: 11,
        text: "The axillary septum doesn't include:",
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Pectoralis minor muscle and fascia.' },
          { id: 'b', text: 'Suspensory ligament of axilla.' },
          { id: 'c', text: 'Axillary sheath.' },
          { id: 'd', text: 'Subclavius muscle and fascia.' }
        ],
        correctOptionId: 'c',
        explanation: 'The deep layer of the anterior wall (pectoralis minor, subclavius, clavipectoral fascia, and suspensory ligament) forms the fascial septum, whereas the axillary sheath encloses the axillary vessels and brachial plexus inside the axilla (derived from prevertebral fascia).'
      },
      {
        id: 'axilla-12',
        chapterId: 'axilla',
        number: 12,
        text: 'Medial wall of axilla is formed by which of the following muscles:',
        source: 'DEP BOOK - 2021',
        options: [
          { id: 'a', text: 'Serratus anterior.' },
          { id: 'b', text: 'Pectoralis major.' },
          { id: 'c', text: 'Subscapularis.' },
          { id: 'd', text: 'Pectoralis minor.' }
        ],
        correctOptionId: 'a',
        explanation: 'The medial wall of the axilla is formed by the upper 4–5 ribs, their intercostal muscles, and the upper digitations of the serratus anterior muscle.'
      },
      {
        id: 'axilla-13',
        chapterId: 'axilla',
        number: 13,
        text: 'The anterior wall of axilla is formed by all the following except:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Pectoralis major.' },
          { id: 'b', text: 'Subscapularis.' },
          { id: 'c', text: 'Pectoralis minor.' },
          { id: 'd', text: 'Clavipectoral fascia.' }
        ],
        correctOptionId: 'b',
        explanation: 'Subscapularis forms the superior part of the posterior wall of the axilla, not the anterior wall.'
      },
      {
        id: 'axilla-14',
        chapterId: 'axilla',
        number: 14,
        text: 'Concerning the axilla, the following statements are correct except:',
        source: '2022',
        options: [
          { id: 'a', text: 'Its posterior wall is formed of subscapularis, teres major and latissimus dorsi.' },
          { id: 'b', text: 'It contains the roots of the brachial plexus.' },
          { id: 'c', text: 'It is connected with the neck through the cervicoaxillary canal.' },
          { id: 'd', text: 'The serratus anterior muscle shares in the formation of its medial wall.' }
        ],
        correctOptionId: 'b',
        explanation: 'The axilla contains the cords and branches of the brachial plexus; the roots and trunks lie in the neck above the clavicle.'
      },
      {
        id: 'axilla-15',
        chapterId: 'axilla',
        number: 15,
        text: 'Which of the following is NOT contained in the axilla?',
        source: '2021',
        options: [
          { id: 'a', text: 'Axillary blood vessels.' },
          { id: 'b', text: 'Lymph nodes.' },
          { id: 'c', text: 'Trunks and divisions of brachial plexus.' },
          { id: 'd', text: 'Axillary nerve.' }
        ],
        correctOptionId: 'c',
        explanation: 'The trunks of the brachial plexus are supraclavicular (in the posterior triangle of the neck); only the cords and their branches lie in the axilla.'
      },
      {
        id: 'axilla-16',
        chapterId: 'axilla',
        number: 16,
        text: 'Regarding the axilla, the following statement is correct:',
        source: '2019',
        options: [
          { id: 'a', text: 'Its posterior wall is formed of subscapularis only.' },
          { id: 'b', text: 'It contains the roots of the brachial plexus.' },
          { id: 'c', text: 'It is connected with the neck through the cervicoaxillary canal.' },
          { id: 'd', text: 'The pectoralis major and minor muscles share in the formation of its medial wall.' }
        ],
        correctOptionId: 'c',
        explanation: 'The apex of the axilla is the cervicoaxillary canal, which connects the axilla with the posterior triangle of the neck.'
      }
    ]
  },
  {
    id: 'brachial-plexus',
    number: 6,
    title: 'Brachial Plexus',
    regionGroup: 'Shoulder & Axilla',
    description: 'Roots, trunks, divisions, cords, and branches of the brachial plexus (C5–T1) and their clinical correlations.',
    questions: [
      {
        id: 'plexus-1',
        chapterId: 'brachial-plexus',
        number: 1,
        text: 'A 33-year-old man was admitted to the emergency department after an automobile collision. Physical examination revealed weakness of the medial rotation and adduction at the shoulder joint. An X-ray examination showed a fracture of the lateral border of the scapula. Which nerve is most likely injured?',
        source: '2018',
        options: [
          { id: 'a', text: 'Lower subscapular.' },
          { id: 'b', text: 'Axillary.' },
          { id: 'c', text: 'Radial.' },
          { id: 'd', text: 'Spinal accessory.' }
        ],
        correctOptionId: 'a',
        explanation: 'The lower subscapular nerve innervates the subscapularis and teres major (which arises from the lateral border of the scapula). Teres major and subscapularis medially rotate and adduct the arm.'
      },
      {
        id: 'plexus-2',
        chapterId: 'brachial-plexus',
        number: 2,
        text: 'The brachial plexus has:',
        source: 'IPKA',
        options: [
          { id: 'a', text: '8 rami (roots).' },
          { id: 'b', text: '5 trunks.' },
          { id: 'c', text: '6 divisions.' },
          { id: 'd', text: '4 cords.' },
          { id: 'e', text: 'None of the above.' }
        ],
        correctOptionId: 'c',
        explanation: 'The brachial plexus consists of 5 roots (C5–T1), 3 trunks (upper, middle, lower), 6 divisions (3 anterior and 3 posterior), and 3 cords (lateral, medial, posterior).'
      },
      {
        id: 'plexus-3',
        chapterId: 'brachial-plexus',
        number: 3,
        text: 'The usual number of branches of the medial cord of the brachial plexus:',
        source: 'IPKA',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '3' },
          { id: 'd', text: '4' },
          { id: 'e', text: '5' }
        ],
        correctOptionId: 'e',
        explanation: 'The medial cord gives 5 branches (M4U): Medial pectoral nerve, Medial cutaneous nerve of arm, Medial cutaneous nerve of forearm, Medial root of median nerve, and Ulnar nerve.'
      },
      {
        id: 'plexus-4',
        chapterId: 'brachial-plexus',
        number: 4,
        text: 'The suprascapular nerve is a branch from the:',
        source: 'IPKA - 2022 - 2021',
        options: [
          { id: 'a', text: 'Roots of the brachial plexus.' },
          { id: 'b', text: 'Upper trunk.' },
          { id: 'c', text: 'Middle trunk.' },
          { id: 'd', text: 'Posterior cord.' },
          { id: 'e', text: 'Lateral cord.' }
        ],
        correctOptionId: 'b',
        explanation: 'The upper (superior) trunk of the brachial plexus (C5, C6) gives off two branches: the suprascapular nerve and the nerve to subclavius.'
      },
      {
        id: 'plexus-5',
        chapterId: 'brachial-plexus',
        number: 5,
        text: 'Which one of the following nerves arises from the roots of the brachial plexus?',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Medial pectoral nerve.' },
          { id: 'b', text: 'Dorsal scapular nerve.' },
          { id: 'c', text: 'Axillary nerve.' },
          { id: 'd', text: 'Thoracodorsal nerve.' },
          { id: 'e', text: 'Suprascapular nerve.' }
        ],
        correctOptionId: 'b',
        explanation: 'The dorsal scapular nerve (C5) and the long thoracic nerve (C5, C6, C7) arise directly from the roots of the brachial plexus.'
      },
      {
        id: 'plexus-6',
        chapterId: 'brachial-plexus',
        number: 6,
        text: 'The upper trunk of brachial plexus gives origin to; select the correct answers:',
        source: 'DEP BOOK - 2025',
        options: [
          { id: 'a', text: 'Suprascapular nerve.' },
          { id: 'b', text: 'Long thoracic nerve.' },
          { id: 'c', text: 'Upper subscapular nerve.' },
          { id: 'd', text: 'Axillary nerve.' },
          { id: 'e', text: 'Lateral pectoral.' },
          { id: 'f', text: 'Dorsal scapular.' }
        ],
        correctOptionId: 'a',
        explanation: 'The upper trunk gives origin to the suprascapular nerve and the nerve to subclavius.'
      },
      {
        id: 'plexus-7',
        chapterId: 'brachial-plexus',
        number: 7,
        text: 'Structures passing through the spinoglenoid notch, choose the most correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Circumflex scapular artery.' },
          { id: 'b', text: 'Suprascapular nerve and vessels.' },
          { id: 'c', text: 'Subscapular nerve and vessels.' },
          { id: 'd', text: 'Dorsal scapular vessels.' }
        ],
        correctOptionId: 'b',
        explanation: 'The suprascapular nerve and vessels pass from the supraspinous fossa through the spinoglenoid notch (around the lateral border of the spine of the scapula) to enter the infraspinous fossa.'
      },
      {
        id: 'plexus-8',
        chapterId: 'brachial-plexus',
        number: 8,
        text: 'Which nerve arises from a cord of the brachial plexus cords?',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Long thoracic nerve.' },
          { id: 'b', text: 'Nerve to subclavius.' },
          { id: 'c', text: 'Suprascapular nerve.' },
          { id: 'd', text: 'Thoracodorsal nerve.' }
        ],
        correctOptionId: 'd',
        explanation: 'The thoracodorsal nerve arises from the posterior cord of the brachial plexus. Long thoracic arises from roots, while nerve to subclavius and suprascapular nerve arise from the upper trunk.'
      },
      {
        id: 'plexus-9',
        chapterId: 'brachial-plexus',
        number: 9,
        text: 'Medial cord of brachial plexus gives ..... choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Lateral cutaneous nerve of the forearm.' },
          { id: 'b', text: 'Musculocutaneous nerve.' },
          { id: 'c', text: 'Lateral pectoral nerve.' },
          { id: 'd', text: 'Ulnar nerve.' }
        ],
        correctOptionId: 'd',
        explanation: 'The ulnar nerve is the largest terminal branch of the medial cord of the brachial plexus.'
      },
      {
        id: 'plexus-10',
        chapterId: 'brachial-plexus',
        number: 10,
        text: 'Posterior cord of brachial plexus gives, choose correct answer:',
        source: 'DEP BOOK - 2021 - 2025',
        options: [
          { id: 'a', text: 'Suprascapular nerve.' },
          { id: 'b', text: 'Long thoracic nerve.' },
          { id: 'c', text: 'Axillary nerve.' },
          { id: 'd', text: 'Median nerve.' },
          { id: 'e', text: 'Musculocutaneous nerve.' },
          { id: 'f', text: 'Dorsal scapular nerve.' }
        ],
        correctOptionId: 'c',
        explanation: 'The posterior cord branches (ULNAR mnemonic) are: Upper subscapular, Lower subscapular, Nerve to latissimus dorsi (thoracodorsal), Axillary nerve, and Radial nerve.'
      },
      {
        id: 'plexus-11',
        chapterId: 'brachial-plexus',
        number: 11,
        text: 'Which one is a branch of the lateral cord of the brachial plexus?',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Upper subscapular nerve.' },
          { id: 'b', text: 'Long thoracic nerve.' },
          { id: 'c', text: 'Musculocutaneous nerve.' },
          { id: 'd', text: 'Suprascapular nerve.' }
        ],
        correctOptionId: 'c',
        explanation: 'The lateral cord gives 3 branches (LML): Lateral pectoral nerve, Musculocutaneous nerve, and Lateral root of the median nerve.'
      },
      {
        id: 'plexus-12',
        chapterId: 'brachial-plexus',
        number: 12,
        text: 'Which muscles are supplied by medial cord of brachial plexus?',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Teres major.' },
          { id: 'b', text: 'Deltoid.' },
          { id: 'c', text: 'Anconeus.' },
          { id: 'd', text: 'Pronator teres.' }
        ],
        correctOptionId: 'd',
        explanation: 'Pronator teres is supplied by the median nerve (which receives its medial root from the medial cord). Teres major, deltoid, and anconeus are all supplied by branches of the posterior cord.'
      },
      {
        id: 'plexus-13',
        chapterId: 'brachial-plexus',
        number: 13,
        text: 'The dorsal scapular nerve arises from:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Posterior cord of brachial plexus.' },
          { id: 'b', text: 'Upper trunk of brachial plexus.' },
          { id: 'c', text: 'Roots of brachial plexus.' },
          { id: 'd', text: 'Medial cord of brachial plexus.' }
        ],
        correctOptionId: 'c',
        explanation: 'The dorsal scapular nerve arises directly from the C5 root of the brachial plexus.'
      },
      {
        id: 'plexus-14',
        chapterId: 'brachial-plexus',
        number: 14,
        text: 'Most muscles acting on shoulder girdle & upper limb joints are supplied by branches of brachial plexus except:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Trapezius' },
          { id: 'b', text: 'Teres minor.' },
          { id: 'c', text: 'Latissimus dorsi.' },
          { id: 'd', text: 'Rhomboid major.' }
        ],
        correctOptionId: 'a',
        explanation: 'Trapezius is the only muscle of the shoulder girdle supplied by a cranial nerve (the spinal accessory nerve, CN XI) rather than the brachial plexus.'
      },
      {
        id: 'plexus-15',
        chapterId: 'brachial-plexus',
        number: 15,
        text: 'Which muscle is innervated by a branch from posterior cord of brachial plexus:',
        source: 'DEP BOOK - 21',
        options: [
          { id: 'a', text: 'Rhomboid major.' },
          { id: 'b', text: 'Scalenus anterior.' },
          { id: 'c', text: 'Supraspinatus.' },
          { id: 'd', text: 'Subscapularis.' }
        ],
        correctOptionId: 'd',
        explanation: 'Subscapularis is innervated by the upper and lower subscapular nerves, both arising from the posterior cord of the brachial plexus.'
      },
      {
        id: 'plexus-16',
        chapterId: 'brachial-plexus',
        number: 16,
        text: 'Suprascapular nerve supplies:',
        source: 'DEP BOOK - 2021',
        options: [
          { id: 'a', text: 'Muscle inserted into back of inferior angle of scapula.' },
          { id: 'b', text: 'Muscle inserted into lesser tuberosity of humerus.' },
          { id: 'c', text: 'Muscle that initiates abduction of arm.' },
          { id: 'd', text: 'Muscle inserted into floor of bicipital groove.' }
        ],
        correctOptionId: 'c',
        explanation: 'The suprascapular nerve supplies the supraspinatus muscle, which initiates abduction of the arm (0°–15°).'
      },
      {
        id: 'plexus-17',
        chapterId: 'brachial-plexus',
        number: 17,
        text: 'Which one of the following statements regarding the dorsal scapular nerve is correct:',
        source: '2021',
        options: [
          { id: 'a', text: 'It is a branch of C6 from the cervical plexus.' },
          { id: 'b', text: 'It supplies the rhomboids major muscle.' },
          { id: 'c', text: 'It usually gives a branch to serratus anterior.' },
          { id: 'd', text: 'It does not supply levator scapulae.' }
        ],
        correctOptionId: 'b',
        explanation: 'The dorsal scapular nerve (C5) pierces scalenus medius to supply rhomboid major, rhomboid minor, and levator scapulae.'
      },
      {
        id: 'plexus-18',
        chapterId: 'brachial-plexus',
        number: 18,
        text: 'Which is a branch of medial cord of brachial plexus:',
        source: '2021',
        options: [
          { id: 'a', text: 'Medial pectoral nerve.' },
          { id: 'b', text: 'Lateral pectoral nerve.' },
          { id: 'c', text: 'Dorsal scapular nerve.' },
          { id: 'd', text: 'Axillary nerve.' }
        ],
        correctOptionId: 'a',
        explanation: 'The medial pectoral nerve (C8, T1) is the first branch of the medial cord of the brachial plexus.'
      },
      {
        id: 'plexus-19',
        chapterId: 'brachial-plexus',
        number: 19,
        text: 'Which nerve arises from one of the brachial plexus cords?',
        source: '2019',
        options: [
          { id: 'a', text: 'Dorsal scapular nerve.' },
          { id: 'b', text: 'Long thoracic nerve.' },
          { id: 'c', text: 'Suprascapular nerve.' },
          { id: 'd', text: 'Thoracodorsal nerve.' }
        ],
        correctOptionId: 'd',
        explanation: 'The thoracodorsal nerve arises from the posterior cord of the brachial plexus.'
      },
      {
        id: 'plexus-20',
        chapterId: 'brachial-plexus',
        number: 20,
        text: 'The cords of the brachial plexus lie:',
        source: '2019',
        options: [
          { id: 'a', text: 'On the side of the neck.' },
          { id: 'b', text: 'In the axilla.' },
          { id: 'c', text: 'On the back of the neck.' },
          { id: 'd', text: 'Behind the clavicle.' }
        ],
        correctOptionId: 'b',
        explanation: 'The roots and trunks lie in the neck, the divisions lie behind the clavicle, and the cords and their branches lie in the axilla arranged around the axillary artery.'
      },
      {
        id: 'plexus-21',
        chapterId: 'brachial-plexus',
        number: 21,
        text: 'The root value of the long thoracic nerve is:',
        source: 'IPKA - 2021',
        options: [
          { id: 'a', text: 'C5.' },
          { id: 'b', text: 'C6.' },
          { id: 'c', text: 'C7.' },
          { id: 'd', text: 'C5, 6 & 7.' },
          { id: 'e', text: 'C5, 6, 7 & 8.' }
        ],
        correctOptionId: 'd',
        explanation: 'The long thoracic nerve arises from the ventral rami (roots) of C5, C6, and C7 ("C5, 6, 7 raise your wings to heaven").'
      },
      {
        id: 'plexus-22',
        chapterId: 'brachial-plexus',
        number: 22,
        text: 'The suprascapular ligament lies between, mark correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Suprascapular and subscapular arteries.' },
          { id: 'b', text: 'Suprascapular nerve and suprascapular artery.' },
          { id: 'c', text: 'Suprascapular and upper subscapular nerves.' },
          { id: 'd', text: 'Upper and lower subscapular nerves.' }
        ],
        correctOptionId: 'b',
        explanation: 'The superior transverse scapular (suprascapular) ligament converts the suprascapular notch into a foramen: the suprascapular artery passes above the ligament ("Army over the bridge") and the suprascapular nerve passes below it ("Navy under the bridge").'
      },
      {
        id: 'plexus-23',
        chapterId: 'brachial-plexus',
        number: 23,
        text: 'A 55-year-old male fire-fighter was admitted to the hospital after blunt trauma to his right axilla. Examination revealed winging of the scapula and partial paralysis of the right side of the diaphragm. Which of the following parts of the brachial plexus had been injured?',
        source: '2018 - 2017',
        options: [
          { id: 'a', text: 'Cords.' },
          { id: 'b', text: 'Roots.' },
          { id: 'c', text: 'Trunks.' },
          { id: 'd', text: 'Terminal branches.' }
        ],
        correctOptionId: 'b',
        explanation: 'Winging of the scapula (long thoracic nerve from C5–C7 roots) combined with hemidiaphragm weakness (contribution of C5 root to the phrenic nerve) indicates an injury at the level of the roots of the brachial plexus.'
      }
    ]
  }
];
