import { Chapter } from '../types/mcq';

export const chaptersPart2: Chapter[] = [
  {
    id: 'axillary-nerve',
    number: 7,
    title: 'Axillary Nerve',
    regionGroup: 'Shoulder & Axilla',
    description: 'Origin, course through the quadrangular space, relation to the surgical neck of the humerus, motor and sensory supply, and clinical lesions.',
    questions: [
      {
        id: 'ax-nerve-1',
        chapterId: 'axillary-nerve',
        number: 1,
        text: 'A man came with fracture of the surgical neck of the humerus, the first movement of the shoulder joint that you would test to confirm the nerve injury is:',
        source: '2024',
        options: [
          { id: 'a', text: 'Flexion.' },
          { id: 'b', text: 'Extension.' },
          { id: 'c', text: 'Rotation.' },
          { id: 'd', text: 'Abduction.' }
        ],
        correctOptionId: 'd',
        explanation: 'Fracture of the surgical neck of the humerus commonly injures the axillary nerve, which innervates the deltoid muscle. Testing shoulder abduction (15°–90°) directly assesses deltoid motor function.'
      },
      {
        id: 'ax-nerve-2',
        chapterId: 'axillary-nerve',
        number: 2,
        text: 'The following nerve is related directly to surgical neck of humerus:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Radial nerve.' },
          { id: 'b', text: 'Ulnar nerve.' },
          { id: 'c', text: 'Axillary nerve.' },
          { id: 'd', text: 'Musculocutaneous nerve.' }
        ],
        correctOptionId: 'c',
        explanation: 'The axillary nerve winds around the posterior aspect of the surgical neck of the humerus accompanied by the posterior circumflex humeral vessels.'
      },
      {
        id: 'ax-nerve-3',
        chapterId: 'axillary-nerve',
        number: 3,
        text: 'Nerve commonly injured after fracture of humerus surgical neck is:',
        source: 'DEP BOOK - 2022',
        options: [
          { id: 'a', text: 'Axillary nerve.' },
          { id: 'b', text: 'Ulnar nerve.' },
          { id: 'c', text: 'Radial nerve.' },
          { id: 'd', text: 'Median nerve.' },
          { id: 'e', text: 'Musculocutaneous nerve.' }
        ],
        correctOptionId: 'a',
        explanation: 'The axillary nerve is in direct contact with the surgical neck of the humerus and is injured in surgical neck fractures or inferior shoulder dislocations.'
      },
      {
        id: 'ax-nerve-4',
        chapterId: 'axillary-nerve',
        number: 4,
        text: 'Which muscles are innervated by the axillary nerve?',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Supraspinatus and infraspinatus muscles.' },
          { id: 'b', text: 'Deltoid and teres minor muscles.' },
          { id: 'c', text: 'Pectoralis major and pectoralis minor muscles.' },
          { id: 'd', text: 'Latissimus dorsi and teres major muscles.' }
        ],
        correctOptionId: 'b',
        explanation: 'The axillary nerve supplies the deltoid (anterior and posterior branches) and teres minor (posterior branch).'
      },
      {
        id: 'ax-nerve-5',
        chapterId: 'axillary-nerve',
        number: 5,
        text: 'The axillary nerve innervates; select the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Deltoid and supraspinatus.' },
          { id: 'b', text: 'Deltoid and teres minor.' },
          { id: 'c', text: 'Teres minor and teres major.' },
          { id: 'd', text: 'Deltoid and teres major.' }
        ],
        correctOptionId: 'b',
        explanation: 'The axillary nerve supplies deltoid and teres minor.'
      },
      {
        id: 'ax-nerve-6',
        chapterId: 'axillary-nerve',
        number: 6,
        text: 'Inability to abduct arm from 15 to 90 degrees is due to injury of:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Radial nerve.' },
          { id: 'b', text: 'Long thoracic nerve (nerve to serratus anterior).' },
          { id: 'c', text: 'Musculocutaneous nerve.' },
          { id: 'd', text: 'Axillary nerve.' }
        ],
        correctOptionId: 'd',
        explanation: 'Abduction from 15° to 90° is performed by the deltoid muscle, which is innervated by the axillary nerve.'
      },
      {
        id: 'ax-nerve-7',
        chapterId: 'axillary-nerve',
        number: 7,
        text: 'Regarding the axillary nerve:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'It arises from the lateral cord of the brachial plexus.' },
          { id: 'b', text: 'It supplies the skin of the lower half of the lateral side of the arm.' },
          { id: 'c', text: 'It passes through the triangular space.' },
          { id: 'd', text: 'It supplies the deltoid and teres minor muscles.' }
        ],
        correctOptionId: 'd',
        explanation: 'The axillary nerve arises from the posterior cord, passes through the quadrangular space, supplies the deltoid and teres minor muscles, and gives the upper lateral cutaneous nerve of the arm supplying the skin over the lower half of the deltoid (upper lateral arm).'
      },
      {
        id: 'ax-nerve-8',
        chapterId: 'axillary-nerve',
        number: 8,
        text: 'Regarding nerve injuries in upper limb, choose correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Injury to the median produces wrist drop.' },
          { id: 'b', text: 'Injury to the ulnar nerve produces ape hand.' },
          { id: 'c', text: 'Ulnar nerve is injured by compression in the carpal tunnel.' },
          { id: 'd', text: 'Injury to the axillary nerve leads to loss of abduction of the shoulder.' }
        ],
        correctOptionId: 'd',
        explanation: 'Axillary nerve injury paralyzes the deltoid, leading to loss of shoulder abduction (15°–90°). Radial nerve injury causes wrist drop, median nerve injury causes ape hand and carpal tunnel syndrome, and ulnar nerve injury causes claw hand.'
      },
      {
        id: 'ax-nerve-9',
        chapterId: 'axillary-nerve',
        number: 9,
        text: 'Which nerve is probably damaged if a patient cannot abduct arm beyond 15°:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Axillary.' },
          { id: 'b', text: 'Radial.' },
          { id: 'c', text: 'Musculocutaneous.' },
          { id: 'd', text: 'Median.' }
        ],
        correctOptionId: 'a',
        explanation: 'Supraspinatus abducts the arm up to 15°, after which the deltoid (axillary nerve) takes over from 15° to 90°.'
      },
      {
        id: 'ax-nerve-10',
        chapterId: 'axillary-nerve',
        number: 10,
        text: 'Injury to quadrangular intermuscular space of axillary region may endanger:',
        source: 'DEP BOOK - 2010',
        options: [
          { id: 'a', text: 'Posterior circumflex humeral artery & radial nerve.' },
          { id: 'b', text: 'Posterior circumflex humeral artery & axillary nerve.' },
          { id: 'c', text: 'Radial nerve & profunda brachii artery.' },
          { id: 'd', text: 'Profunda brachii artery & axillary nerve.' }
        ],
        correctOptionId: 'b',
        explanation: 'The quadrangular space transmits the axillary nerve and posterior circumflex humeral vessels.'
      },
      {
        id: 'ax-nerve-11',
        chapterId: 'axillary-nerve',
        number: 11,
        text: 'Lesion or injury of axillary nerve causes:',
        source: 'DEP BOOK - 21',
        options: [
          { id: 'a', text: 'Winging of scapula.' },
          { id: 'b', text: 'Wrist drop.' },
          { id: 'c', text: 'Claw hand.' },
          { id: 'd', text: 'Flat shoulder.' },
          { id: 'e', text: 'Ape hand.' },
          { id: 'f', text: 'Finger drop.' }
        ],
        correctOptionId: 'd',
        explanation: 'Axillary nerve injury causes denervation atrophy of the deltoid muscle, resulting in a flat shoulder contour and sensory loss over the regimental badge area.'
      },
      {
        id: 'ax-nerve-12',
        chapterId: 'axillary-nerve',
        number: 12,
        text: 'Axillary nerve supplying the following muscle:',
        source: '2021',
        options: [
          { id: 'a', text: 'Subscapularis.' },
          { id: 'b', text: 'Pectoralis minor.' },
          { id: 'c', text: 'Teres major.' },
          { id: 'd', text: 'Teres minor.' }
        ],
        correctOptionId: 'd',
        explanation: 'The posterior branch of the axillary nerve supplies the teres minor muscle (with a pseudoganglion on its nerve branch).'
      },
      {
        id: 'ax-nerve-13',
        chapterId: 'axillary-nerve',
        number: 13,
        text: 'The axillary nerve may be injured due to:',
        source: '2019',
        options: [
          { id: 'a', text: 'Surgical neck of the humerus fracture.' },
          { id: 'b', text: 'Fracture of the mid shaft of the humerus.' },
          { id: 'c', text: 'Fracture of the medial epicondyle of the humerus.' },
          { id: 'd', text: 'Fracture of the trochlea.' }
        ],
        correctOptionId: 'a',
        explanation: 'Fracture of the surgical neck of the humerus injures the axillary nerve; mid-shaft fracture injures the radial nerve; medial epicondyle fracture injures the ulnar nerve.'
      },
      {
        id: 'ax-nerve-14',
        chapterId: 'axillary-nerve',
        number: 14,
        text: 'Which nerve is responsible for the innervation of the deltoid muscle?',
        source: '2025',
        options: [
          { id: 'a', text: 'Radial nerve' },
          { id: 'b', text: 'Ulnar nerve' },
          { id: 'c', text: 'Axillary nerve' },
          { id: 'd', text: 'Musculocutaneous nerve' }
        ],
        correctOptionId: 'c',
        explanation: 'The axillary nerve (C5, C6) is the motor nerve to the deltoid muscle.'
      }
    ]
  },
  {
    id: 'axillary-artery-vein',
    number: 8,
    title: 'Axillary Artery & Vein',
    regionGroup: 'Shoulder & Axilla',
    description: 'Extent, three parts divided by pectoralis minor, branches of each part, relations, and anastomosis around the scapula.',
    questions: [
      {
        id: 'ax-art-1',
        chapterId: 'axillary-artery-vein',
        number: 1,
        text: 'A 30-year-old female was examined in the emergency department after falling from her balcony. Radiographic examination revealed a broken clavicle with associated internal bleeding. Which of the following vessels was most likely to be injured?',
        source: '2018',
        options: [
          { id: 'a', text: 'Subclavian vein.' },
          { id: 'b', text: 'Subclavian artery.' },
          { id: 'c', text: 'Cephalic vein.' },
          { id: 'd', text: 'Lateral thoracic.' }
        ],
        correctOptionId: 'a',
        explanation: 'The subclavian vein lies immediately posterior to the clavicle (anterior to scalenus anterior), closer to the clavicle than the subclavian artery, making it the vessel most likely injured in a displaced clavicular fracture.'
      },
      {
        id: 'ax-art-2',
        chapterId: 'axillary-artery-vein',
        number: 2,
        text: 'Regarding the axillary artery, choose the correct answer:',
        source: '2017 - DEP BOOK',
        options: [
          { id: 'a', text: 'It begins at the inner border of the first rib.' },
          { id: 'b', text: 'It ends at the lower border of the teres minor muscle.' },
          { id: 'c', text: 'Its third part is related medially to the ulnar nerve.' },
          { id: 'd', text: 'Its second part is related posteriorly to the axillary nerve.' }
        ],
        correctOptionId: 'c',
        explanation: 'The axillary artery begins at the outer border of the first rib and ends at the lower border of teres major. Its 3rd part is related medially to the ulnar nerve (and medial cutaneous nerve of the forearm), whereas its 2nd part is related posteriorly to the posterior cord.'
      },
      {
        id: 'ax-art-3',
        chapterId: 'axillary-artery-vein',
        number: 3,
        text: 'One of the following is a branch of the second part of the axillary artery:',
        source: 'DEP BOOK - 2016 - IPKA',
        options: [
          { id: 'a', text: 'Lateral thoracic artery.' },
          { id: 'b', text: 'Anterior circumflex humeral artery.' },
          { id: 'c', text: 'Posterior circumflex humeral artery.' },
          { id: 'd', text: 'Superior thoracic artery.' },
          { id: 'e', text: 'Subscapular artery.' }
        ],
        correctOptionId: 'a',
        explanation: 'The 2nd part of the axillary artery (behind pectoralis minor) gives 2 branches: the thoracoacromial artery and the lateral thoracic artery.'
      },
      {
        id: 'ax-art-4',
        chapterId: 'axillary-artery-vein',
        number: 4,
        text: 'Anastomosis around the scapula connects the subclavian artery with the:',
        source: 'DEP BOOK - 2016 - 21 - 22',
        options: [
          { id: 'a', text: 'First part of the axillary artery.' },
          { id: 'b', text: 'Second part of the axillary artery.' },
          { id: 'c', text: 'Third part of the axillary artery.' },
          { id: 'd', text: 'Brachial artery.' }
        ],
        correctOptionId: 'c',
        explanation: 'The scapular anastomosis connects the 1st part of the subclavian artery (via suprascapular and deep branch of transverse cervical arteries) with the 3rd part of the axillary artery (via the subscapular and circumflex scapular arteries).'
      },
      {
        id: 'ax-art-5',
        chapterId: 'axillary-artery-vein',
        number: 5,
        text: 'A fracture of the surgical neck of the humerus, which artery may be injured?',
        source: '2024 - 2025',
        options: [
          { id: 'a', text: 'Subscapular.' },
          { id: 'b', text: 'Posterior humeral circumflex.' },
          { id: 'c', text: 'Radial recurrent.' },
          { id: 'd', text: 'Deep brachial.' },
          { id: 'e', text: 'Circumflex scapular.' }
        ],
        correctOptionId: 'b',
        explanation: 'The anterior and posterior circumflex humeral arteries (from the 3rd part of the axillary artery) form an anastomotic circle around the surgical neck of the humerus.'
      },
      {
        id: 'ax-art-6',
        chapterId: 'axillary-artery-vein',
        number: 6,
        text: 'The thoracoacromial artery is a branch of the:',
        source: 'IPKA - 2022',
        options: [
          { id: 'a', text: 'Subclavian artery.' },
          { id: 'b', text: 'First part of the axillary artery.' },
          { id: 'c', text: 'Second part of the axillary artery.' },
          { id: 'd', text: 'Third part of the axillary artery.' },
          { id: 'e', text: 'Brachial artery.' }
        ],
        correctOptionId: 'c',
        explanation: 'The thoracoacromial (acromiothoracic) artery arises from the 2nd part of the axillary artery, pierces the clavipectoral fascia, and divides into four branches (clavicular, pectoral, acromial, deltoid).'
      },
      {
        id: 'ax-art-7',
        chapterId: 'axillary-artery-vein',
        number: 7,
        text: 'One of the following is a branch of axillary artery:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Profunda brachii artery.' },
          { id: 'b', text: 'Subscapular artery.' },
          { id: 'c', text: 'Superior ulnar collateral.' },
          { id: 'd', text: 'Inferior ulnar collateral.' }
        ],
        correctOptionId: 'b',
        explanation: 'The subscapular artery is the largest branch of the axillary artery (arising from its 3rd part). Profunda brachii, superior ulnar collateral, and inferior ulnar collateral are all branches of the brachial artery.'
      },
      {
        id: 'ax-art-8',
        chapterId: 'axillary-artery-vein',
        number: 8,
        text: 'Regarding the axillary artery, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'It begins at the inner border of the first rib.' },
          { id: 'b', text: 'It ends at the lower border of the teres minor muscle.' },
          { id: 'c', text: 'It is divided into three parts by the pectoralis minor muscle.' },
          { id: 'd', text: 'Its third part is related medially to the median nerve.' }
        ],
        correctOptionId: 'c',
        explanation: 'Pectoralis minor crosses anterior to the axillary artery and divides it into the 1st part (medial/superior to the muscle), 2nd part (posterior to the muscle), and 3rd part (lateral/inferior to the muscle).'
      },
      {
        id: 'ax-art-9',
        chapterId: 'axillary-artery-vein',
        number: 9,
        text: 'Regarding the axillary artery, one is correct:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'The largest of its branches is the superior thoracic artery.' },
          { id: 'b', text: 'Its third part is crossed by the lateral root of the median nerve.' },
          { id: 'c', text: 'The pectoralis minor covers most of the artery.' },
          { id: 'd', text: 'The axillary vein lies medial to the artery.' }
        ],
        correctOptionId: 'd',
        explanation: 'Throughout its course in the axilla, the axillary vein lies on the medial side of the axillary artery. The largest branch of the axillary artery is the subscapular artery, and its 3rd part is crossed anteriorly by the medial root of the median nerve.'
      },
      {
        id: 'ax-art-10',
        chapterId: 'axillary-artery-vein',
        number: 10,
        text: 'The following arteries share in the anastomosis around the scapula, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Suprascapular artery.' },
          { id: 'b', text: 'Profunda brachii artery.' },
          { id: 'c', text: 'Superficial branch of transverse cervical artery.' },
          { id: 'd', text: 'Circumflex humeral arteries.' },
          { id: 'e', text: 'Superior thoracic artery.' },
          { id: 'f', text: 'Deltoid branch of thoracoacromial artery.' }
        ],
        correctOptionId: 'a',
        explanation: 'The anastomosis around the scapula involves the suprascapular artery, the deep branch of the transverse cervical artery (dorsal scapular artery), and the subscapular/circumflex scapular arteries.'
      },
      {
        id: 'ax-art-11',
        chapterId: 'axillary-artery-vein',
        number: 11,
        text: 'Arteries sharing in anastomosis around the scapula, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Superior thoracic artery.' },
          { id: 'b', text: 'Subscapular artery.' },
          { id: 'c', text: 'Circumflex humeral artery.' },
          { id: 'd', text: 'Profunda brachii artery.' }
        ],
        correctOptionId: 'b',
        explanation: 'The subscapular artery (and its circumflex scapular branch) from the 3rd part of the axillary artery is a major participant in the scapular anastomosis.'
      },
      {
        id: 'ax-art-12',
        chapterId: 'axillary-artery-vein',
        number: 12,
        text: 'Lateral thoracic artery, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Arises from the 1st part of axillary artery.' },
          { id: 'b', text: 'Runs along the lower border of pectoralis major.' },
          { id: 'c', text: 'Anastomoses with intercostal arteries.' },
          { id: 'd', text: 'It supplies the medial of the mammary gland in females.' }
        ],
        correctOptionId: 'c',
        explanation: 'The lateral thoracic artery arises from the 2nd part of the axillary artery, follows the lower border of pectoralis minor, supplies the lateral part of the breast, and anastomoses with the internal thoracic and intercostal arteries.'
      },
      {
        id: 'ax-art-13',
        chapterId: 'axillary-artery-vein',
        number: 13,
        text: 'The subscapular artery, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Arises from the 2nd part of axillary artery.' },
          { id: 'b', text: 'Gives the posterior circumflex humeral artery.' },
          { id: 'c', text: 'Shares in anastomoses around surgical neck of humerus.' },
          { id: 'd', text: 'Gives circumflex scapular artery.' }
        ],
        correctOptionId: 'd',
        explanation: 'The subscapular artery arises from the 3rd part of the axillary artery and divides into the circumflex scapular artery and the thoracodorsal artery.'
      },
      {
        id: 'ax-art-14',
        chapterId: 'axillary-artery-vein',
        number: 14,
        text: 'The superior thoracic artery, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Arises from the 2nd part of axillary artery.' },
          { id: 'b', text: 'Arises behind the pectoralis minor.' },
          { id: 'c', text: 'Pierces the clavipectoral fascia.' },
          { id: 'd', text: 'Supplies the breast.' }
        ],
        correctOptionId: 'd',
        explanation: 'The superior thoracic artery arises from the 1st part of the axillary artery (medial to pectoralis minor) and supplies the upper two intercostal spaces and upper part of the pectoral region/breast.'
      },
      {
        id: 'ax-art-15',
        chapterId: 'axillary-artery-vein',
        number: 15,
        text: 'Which of the following structures passes through upper triangular space of the scapular region:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Circumflex scapular artery' },
          { id: 'b', text: 'Axillary nerve.' },
          { id: 'c', text: 'Posterior circumflex humeral.' },
          { id: 'd', text: 'Profunda brachii.' }
        ],
        correctOptionId: 'a',
        explanation: 'The circumflex scapular artery passes through the upper (medial) triangular space to reach the infraspinous fossa.'
      },
      {
        id: 'ax-art-16',
        chapterId: 'axillary-artery-vein',
        number: 16,
        text: 'The entire following arteries share in anastomosis around scapula except:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Deep branch of transverse cervical artery.' },
          { id: 'b', text: 'Subscapular artery.' },
          { id: 'c', text: 'Suprascapular artery.' },
          { id: 'd', text: 'Lateral thoracic artery.' }
        ],
        correctOptionId: 'd',
        explanation: 'The lateral thoracic artery supplies the lateral thoracic wall and breast; it does not take part in the three-sided scapular anastomosis.'
      },
      {
        id: 'ax-art-17',
        chapterId: 'axillary-artery-vein',
        number: 17,
        text: 'The branches of axillary artery include:',
        source: '2025',
        options: [
          { id: 'a', text: 'Acromio-thoracic artery' },
          { id: 'b', text: 'Medial thoracic artery' },
          { id: 'c', text: 'Superior ulnar collateral artery' },
          { id: 'd', text: 'Profunda brachii artery' }
        ],
        correctOptionId: 'a',
        explanation: 'The acromiothoracic (thoracoacromial) artery is a branch of the 2nd part of the axillary artery.'
      }
    ]
  },
  {
    id: 'front-of-arm',
    number: 9,
    title: 'Muscles of Front of Arm',
    regionGroup: 'Arm & Cubital Fossa',
    description: 'Biceps brachii, brachialis, coracobrachialis, intermuscular septa, and mechanics of elbow flexion and forearm supination.',
    questions: [
      {
        id: 'front-arm-1',
        chapterId: 'front-of-arm',
        number: 1,
        text: 'The bicipital groove of the humerus lodges (contains) the:',
        source: '2017 - 2016 - 2021',
        options: [
          { id: 'a', text: 'Axillary artery.' },
          { id: 'b', text: 'Long head of the biceps.' },
          { id: 'c', text: 'Long head of the triceps.' },
          { id: 'd', text: 'Coracobrachialis.' }
        ],
        correctOptionId: 'b',
        explanation: 'The intertubercular (bicipital) groove lodges the tendon of the long head of the biceps brachii enclosed in its synovial sheath, along with the ascending branch of the anterior circumflex humeral artery.'
      },
      {
        id: 'front-arm-2',
        chapterId: 'front-of-arm',
        number: 2,
        text: 'One of the following muscles produces flexion of the pronated forearm:',
        source: '2017',
        options: [
          { id: 'a', text: 'Biceps brachii.' },
          { id: 'b', text: 'Coracobrachialis.' },
          { id: 'c', text: 'Brachialis.' },
          { id: 'd', text: 'Deltoid.' }
        ],
        correctOptionId: 'c',
        explanation: 'Brachialis inserts into the ulnar tuberosity and coronoid process of the ulna, making it the primary flexor ("workhorse") of the elbow joint regardless of whether the forearm is pronated or supinated.'
      },
      {
        id: 'front-arm-3',
        chapterId: 'front-of-arm',
        number: 3,
        text: 'The biceps brachii muscle is primarily involved in:',
        source: '2024 - 2025',
        options: [
          { id: 'a', text: 'Extension of the forearm.' },
          { id: 'b', text: 'Flexion and supination of the forearm.' },
          { id: 'c', text: 'Pronation of the forearm.' },
          { id: 'd', text: 'Flexion of the wrist.' }
        ],
        correctOptionId: 'b',
        explanation: 'Biceps brachii is a powerful supinator of the flexed forearm (via its insertion on the posterior part of the radial tuberosity) and a strong flexor of the supinated forearm.'
      },
      {
        id: 'front-arm-4',
        chapterId: 'front-of-arm',
        number: 4,
        text: 'The long head of the biceps brachii muscle arises from the:',
        source: 'IPKA - DEP BOOK',
        options: [
          { id: 'a', text: 'Infraglenoid tubercle.' },
          { id: 'b', text: 'Acromion process.' },
          { id: 'c', text: 'Coracoid process.' },
          { id: 'd', text: 'Supraglenoid tubercle.' }
        ],
        correctOptionId: 'd',
        explanation: 'The long head of biceps brachii arises from the supraglenoid tubercle of the scapula (intracapsular, extrasynovial), whereas the short head arises from the tip of the coracoid process.'
      },
      {
        id: 'front-arm-5',
        chapterId: 'front-of-arm',
        number: 5,
        text: 'Regard to the biceps brachii muscle, select the correct statement:',
        source: 'IPKA',
        options: [
          { id: 'a', text: 'The long head arises from the greater tuberosity of the humerus.' },
          { id: 'b', text: 'The short head arises from the acromion.' },
          { id: 'c', text: 'It is a supinator of the forearm.' },
          { id: 'd', text: 'It is supplied by branches of the median nerve.' },
          { id: 'e', text: 'The two heads unite in the upper arm.' }
        ],
        correctOptionId: 'c',
        explanation: 'Biceps brachii is a powerful supinator of the forearm. Its two heads unite in the lower half of the arm, and it is innervated by the musculocutaneous nerve.'
      },
      {
        id: 'front-arm-6',
        chapterId: 'front-of-arm',
        number: 6,
        text: 'The supraglenoid tubercle serves as an attachment for:',
        source: 'IPKA',
        options: [
          { id: 'a', text: 'The long head of the biceps.' },
          { id: 'b', text: 'Long head of the triceps.' },
          { id: 'c', text: 'Medial head of the triceps.' },
          { id: 'd', text: 'Subscapularis.' }
        ],
        correctOptionId: 'a',
        explanation: 'The supraglenoid tubercle gives attachment to the long head of the biceps brachii, while the infraglenoid tubercle gives attachment to the long head of the triceps brachii.'
      },
      {
        id: 'front-arm-7',
        chapterId: 'front-of-arm',
        number: 7,
        text: 'Regarding the brachialis muscle, select the correct answer:',
        source: 'IPKA',
        options: [
          { id: 'a', text: 'Is innervated by the median nerve.' },
          { id: 'b', text: 'Arises from the upper third of the humerus.' },
          { id: 'c', text: 'Is both a flexor and extensor of the elbow joint.' },
          { id: 'd', text: 'Attaches to the bicipital tuberosity of the radius.' },
          { id: 'e', text: 'Has no relation to the medial intermuscular septum.' },
          { id: 'f', text: 'None of the above.' }
        ],
        correctOptionId: 'f',
        explanation: 'Brachialis arises from the lower half of the anterior surface of the humerus and both intermuscular septa, inserts into the coronoid process and tuberosity of the ulna, is a pure flexor of the elbow, and is supplied by the musculocutaneous and radial nerves. Thus none of options a–e is true.'
      },
      {
        id: 'front-arm-8',
        chapterId: 'front-of-arm',
        number: 8,
        text: 'Biceps, choose the correct statement:',
        source: 'IPKA - 2021',
        options: [
          { id: 'a', text: 'Long head arises from infraglenoid tubercle.' },
          { id: 'b', text: 'Is supplied by a branch of the medial cord of the brachial plexus.' },
          { id: 'c', text: 'The two bellies supplied by axillary nerve.' },
          { id: 'd', text: 'Is a pronator of the forearm.' },
          { id: 'e', text: 'Short head arises from coracoid process, lateral to coracobrachialis.' }
        ],
        correctOptionId: 'e',
        explanation: 'The short head of biceps brachii arises from the tip of the coracoid process by a conjoint tendon with coracobrachialis, lying lateral to coracobrachialis.'
      },
      {
        id: 'front-arm-9',
        chapterId: 'front-of-arm',
        number: 9,
        text: 'The lateral intermuscular septum, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Pierced by the ulnar nerve.' },
          { id: 'b', text: 'Gives origin to brachialis muscle.' },
          { id: 'c', text: 'Gives attachment to the lateral head of triceps.' },
          { id: 'd', text: 'Gives attachment to the supinator muscle.' }
        ],
        correctOptionId: 'b',
        explanation: 'The lateral intermuscular septum gives origin anteriorly to brachialis, brachioradialis, and extensor carpi radialis longus, and posteriorly to the medial head of triceps. It is pierced by the radial nerve and anterior descending branch of the profunda brachii artery.'
      },
      {
        id: 'front-arm-10',
        chapterId: 'front-of-arm',
        number: 10,
        text: 'Regarding Biceps brachii, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Its short head lies inside the capsule of the shoulder joint.' },
          { id: 'b', text: 'It flexes the elbow joints.' },
          { id: 'c', text: 'It pronates the forearm.' },
          { id: 'd', text: 'It is supplied by median nerve.' }
        ],
        correctOptionId: 'b',
        explanation: 'Biceps brachii is a strong flexor of the elbow joint (especially when the forearm is supinated).'
      },
      {
        id: 'front-arm-11',
        chapterId: 'front-of-arm',
        number: 11,
        text: 'Which tendon is intracapsular extrasynovial of the shoulder joint, mark the correct answer:',
        source: '2019 - DEP BOOK',
        options: [
          { id: 'a', text: 'Long head of biceps brachii.' },
          { id: 'b', text: 'Short head of biceps brachii.' },
          { id: 'c', text: 'Long head of triceps muscle.' },
          { id: 'd', text: 'Teres minor.' },
          { id: 'e', text: 'Brachialis.' }
        ],
        correctOptionId: 'a',
        explanation: 'The tendon of the long head of the biceps brachii arises from the supraglenoid tubercle inside the fibrous capsule of the shoulder joint, wrapped in a tubular sleeve of synovial membrane (intracapsular, extrasynovial).'
      },
      {
        id: 'front-arm-12',
        chapterId: 'front-of-arm',
        number: 12,
        text: 'Biceps brachii:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'It inserts in the ulnar tuberosity.' },
          { id: 'b', text: 'Is pierced by musculocutaneous nerve.' },
          { id: 'c', text: 'Is a powerful muscle in inducing supination.' },
          { id: 'd', text: 'Helps in extending the flexed elbow.' }
        ],
        correctOptionId: 'c',
        explanation: 'Biceps brachii is a powerful supinator of the flexed forearm. Note: the musculocutaneous nerve pierces coracobrachialis, not biceps brachii.'
      },
      {
        id: 'front-arm-13',
        chapterId: 'front-of-arm',
        number: 13,
        text: 'Supination of the radioulnar joints is done mainly by:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Pronator teres.' },
          { id: 'b', text: 'Pronator quadratus.' },
          { id: 'c', text: 'Brachioradialis.' },
          { id: 'd', text: 'Biceps brachii.' }
        ],
        correctOptionId: 'd',
        explanation: 'Biceps brachii (along with the supinator muscle) is the chief supinator of the radioulnar joints, especially against resistance when the elbow is flexed.'
      },
      {
        id: 'front-arm-14',
        chapterId: 'front-of-arm',
        number: 14,
        text: 'Regarding the biceps brachii, one is false:',
        source: '2022',
        options: [
          { id: 'a', text: 'Has long head attached to the supraglenoid tubercle.' },
          { id: 'b', text: 'Has short head attached to the tip of the coracoid process.' },
          { id: 'c', text: 'It flexes the elbow joint.' },
          { id: 'd', text: 'It is powerful pronator of extended elbow.' }
        ],
        correctOptionId: 'd',
        explanation: 'Biceps brachii is a powerful supinator of the flexed elbow, not a pronator.'
      },
      {
        id: 'front-arm-15',
        chapterId: 'front-of-arm',
        number: 15,
        text: 'Regarding the brachialis muscle, select the correct statement:',
        source: '2021 - 2022',
        options: [
          { id: 'a', text: 'It is innervated by the median nerve.' },
          { id: 'b', text: 'Arises from the upper third of the shaft of humerus.' },
          { id: 'c', text: 'The main flexor of the elbow joint.' },
          { id: 'd', text: 'Attaches to the pronator tuberosity of the radius.' }
        ],
        correctOptionId: 'c',
        explanation: 'Brachialis is the main (primary) flexor of the elbow joint in all positions of the forearm.'
      },
      {
        id: 'front-arm-16',
        chapterId: 'front-of-arm',
        number: 16,
        text: 'Regarding brachialis, which is correct:',
        source: '2021',
        options: [
          { id: 'a', text: 'Innervated by the axillary nerve.' },
          { id: 'b', text: 'Inserts coronoid process of ulna (tuberosity of ulna).' },
          { id: 'c', text: 'Arises from the upper third of the humerus.' },
          { id: 'd', text: 'Is a powerful supinator of the forearm.' }
        ],
        correctOptionId: 'b',
        explanation: 'Brachialis inserts into the anterior surface of the coronoid process and the tuberosity of the ulna.'
      },
      {
        id: 'front-arm-17',
        chapterId: 'front-of-arm',
        number: 17,
        text: 'The coronoid process of the ulna receives the insertion for which muscle:',
        source: '2019',
        options: [
          { id: 'a', text: 'Coracobrachialis.' },
          { id: 'b', text: 'Biceps brachii.' },
          { id: 'c', text: 'Triceps brachii.' },
          { id: 'd', text: 'Brachialis.' }
        ],
        correctOptionId: 'd',
        explanation: 'Brachialis inserts into the anterior aspect of the coronoid process and ulnar tuberosity.'
      },
      {
        id: 'front-arm-18',
        chapterId: 'front-of-arm',
        number: 18,
        text: 'Regarding the muscles of the upper arm:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'The biceps is a powerful pronator of the forearm.' },
          { id: 'b', text: 'The brachialis is supplied by medial and musculocutaneous nerves.' },
          { id: 'c', text: 'The biceps is inserted into the ulnar tuberosity.' },
          { id: 'd', text: 'The brachialis is the primary flexor of the elbow joint.' }
        ],
        correctOptionId: 'd',
        explanation: 'Brachialis is the primary flexor of the elbow joint. Its dual nerve supply is from the musculocutaneous nerve (motor) and radial nerve (proprioceptive/small lateral part), not the medial/median nerve.'
      },
      {
        id: 'front-arm-19',
        chapterId: 'front-of-arm',
        number: 19,
        text: 'Regarding muscle actions of the upper limb:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Flexor digitorum superficialis flexes distal phalanges.' },
          { id: 'b', text: 'Biceps brachii is a powerful supinator.' },
          { id: 'c', text: 'Flexor carpi ulnaris is flexor and abductor of the wrist.' },
          { id: 'd', text: 'Pronators muscles are supplied by ulnar nerve.' }
        ],
        correctOptionId: 'b',
        explanation: 'Biceps brachii is a powerful supinator of the forearm. FDS flexes the middle phalanges, FCU flexes and adducts the wrist, and the pronator muscles are supplied by the median nerve.'
      },
      {
        id: 'front-arm-20',
        chapterId: 'front-of-arm',
        number: 20,
        text: 'The coracoid process of scapula has the attachments of:',
        source: '2025',
        options: [
          { id: 'a', text: 'Long head of biceps' },
          { id: 'b', text: 'Coracobrachialis muscle' },
          { id: 'c', text: 'Pectoralis major' },
          { id: 'd', text: 'Short head of triceps' }
        ],
        correctOptionId: 'b',
        explanation: 'The coracoid process gives attachment to coracobrachialis, the short head of biceps brachii, and pectoralis minor.'
      }
    ]
  },
  {
    id: 'musculocutaneous-nerve',
    number: 10,
    title: 'Musculocutaneous Nerve',
    regionGroup: 'Arm & Cubital Fossa',
    description: 'Origin from the lateral cord, piercing of coracobrachialis, innervation of the BBC muscles, and continuation as the lateral cutaneous nerve of the forearm.',
    questions: [
      {
        id: 'mcn-1',
        chapterId: 'musculocutaneous-nerve',
        number: 1,
        text: 'Select the correct statement; the musculocutaneous nerve:',
        source: '2024 - 2025',
        options: [
          { id: 'a', text: 'It is anterior to the biceps brachii muscle but deep to the brachialis.' },
          { id: 'b', text: 'Arises from the medial cord of the brachial plexus.' },
          { id: 'c', text: 'Becomes the lateral cutaneous nerve of the forearm lateral to the biceps tendon.' },
          { id: 'd', text: 'Supplies the brachioradialis muscle.' }
        ],
        correctOptionId: 'c',
        explanation: 'The musculocutaneous nerve arises from the lateral cord (C5–C7), pierces coracobrachialis, descends between biceps brachii and brachialis, and emerges lateral to the biceps tendon to continue as the lateral cutaneous nerve of the forearm.'
      },
      {
        id: 'mcn-2',
        chapterId: 'musculocutaneous-nerve',
        number: 2,
        text: 'The musculocutaneous nerve passes through which muscle?',
        source: 'IPKA - 2021',
        options: [
          { id: 'a', text: 'Coracobrachialis.' },
          { id: 'b', text: 'Short head of biceps.' },
          { id: 'c', text: 'Brachialis.' },
          { id: 'd', text: 'Medial head of triceps.' },
          { id: 'e', text: 'Long head of biceps.' }
        ],
        correctOptionId: 'a',
        explanation: 'The musculocutaneous nerve characteristically pierces the coracobrachialis muscle.'
      },
      {
        id: 'mcn-3',
        chapterId: 'musculocutaneous-nerve',
        number: 3,
        text: 'The continuation of musculocutaneous nerve is:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Posterior cutaneous nerve of forearm.' },
          { id: 'b', text: 'Medial cutaneous nerve of forearm.' },
          { id: 'c', text: 'Lateral cutaneous nerve of forearm.' },
          { id: 'd', text: 'Medial cutaneous nerve of arm.' }
        ],
        correctOptionId: 'c',
        explanation: 'After supplying all three muscles of the anterior compartment of the arm, the musculocutaneous nerve pierces the deep fascia above the elbow lateral to the biceps tendon as the lateral cutaneous nerve of the forearm.'
      },
      {
        id: 'mcn-4',
        chapterId: 'musculocutaneous-nerve',
        number: 4,
        text: 'The lateral cutaneous nerve of the forearm is derived from the:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Radial nerve.' },
          { id: 'b', text: 'Axillary nerve.' },
          { id: 'c', text: 'Musculocutaneous nerve.' },
          { id: 'd', text: 'Median nerve.' }
        ],
        correctOptionId: 'c',
        explanation: 'The lateral cutaneous nerve of the forearm is the direct terminal sensory continuation of the musculocutaneous nerve.'
      },
      {
        id: 'mcn-5',
        chapterId: 'musculocutaneous-nerve',
        number: 5,
        text: 'The musculocutaneous nerve pierces which muscle?',
        source: '2022',
        options: [
          { id: 'a', text: 'Coracobrachialis.' },
          { id: 'b', text: 'Short head of biceps.' },
          { id: 'c', text: 'Brachialis.' },
          { id: 'd', text: 'Long head of biceps.' }
        ],
        correctOptionId: 'a',
        explanation: 'The musculocutaneous nerve pierces the coracobrachialis muscle.'
      }
    ]
  },
  {
    id: 'brachial-artery',
    number: 11,
    title: 'Brachial Artery',
    regionGroup: 'Arm & Cubital Fossa',
    description: 'Course, relations (median nerve crossing, bicipital aponeurosis), branches (profunda brachii, nutrient, ulnar collaterals), and elbow anastomosis.',
    questions: [
      {
        id: 'brach-art-1',
        chapterId: 'brachial-artery',
        number: 1,
        text: 'The major contributor in the anastomosis around the elbow is:',
        source: '2018',
        options: [
          { id: 'a', text: 'Profunda brachii artery.' },
          { id: 'b', text: 'Ulnar artery.' },
          { id: 'c', text: 'Radial artery.' },
          { id: 'd', text: 'Posterior circumflex humeral artery.' }
        ],
        correctOptionId: 'a',
        explanation: 'The profunda brachii artery (largest branch of the brachial artery) divides into radial collateral (anterior descending) and middle collateral (posterior descending) arteries, making it a major contributor from above to the elbow anastomosis.'
      },
      {
        id: 'brach-art-2',
        chapterId: 'brachial-artery',
        number: 2,
        text: 'Brachial artery shares in the anastomosis around the lateral epicondyle of the humerus through one of the following arteries:',
        source: '2021 - 2022',
        options: [
          { id: 'a', text: 'Profunda brachii.' },
          { id: 'b', text: 'Superior ulnar collateral.' },
          { id: 'c', text: 'Inferior ulnar collateral.' },
          { id: 'd', text: 'Ulnar recurrent.' }
        ],
        correctOptionId: 'a',
        explanation: 'The brachial artery contributes to the anastomosis around the lateral epicondyle via the radial collateral and middle collateral branches of the profunda brachii artery.'
      },
      {
        id: 'brach-art-3',
        chapterId: 'brachial-artery',
        number: 3,
        text: 'One of the following is correct regarding the brachial artery:',
        source: 'IPKA',
        options: [
          { id: 'a', text: 'Lies lateral to the basilic vein.' },
          { id: 'b', text: 'Lies anterior to the cephalic vein.' },
          { id: 'c', text: 'Is crossed posteriorly by the median nerve in all population.' },
          { id: 'd', text: 'Runs parallel but deep to the profunda brachii artery.' },
          { id: 'e', text: 'Is the continuation of the subclavian artery.' }
        ],
        correctOptionId: 'a',
        explanation: 'The basilic vein ascends along the medial side of the brachial artery (so the brachial artery lies lateral to the basilic vein). It is the continuation of the axillary artery and is crossed anteriorly by the median nerve.'
      },
      {
        id: 'brach-art-4',
        chapterId: 'brachial-artery',
        number: 4,
        text: 'The brachial artery, choose the correct answer:',
        source: 'IPKA',
        options: [
          { id: 'a', text: 'Commences at the upper border of teres major.' },
          { id: 'b', text: 'It is in direct contact with the humerus.' },
          { id: 'c', text: 'Has biceps tendon lying medial to it.' },
          { id: 'd', text: 'It ends opposite neck of radius.' },
          { id: 'e', text: 'Is accompanied throughout its course by the basilic vein.' }
        ],
        correctOptionId: 'd',
        explanation: 'The brachial artery begins at the lower border of teres major and ends in the cubital fossa opposite the neck of the radius by dividing into the radial and ulnar arteries.'
      },
      {
        id: 'brach-art-5',
        chapterId: 'brachial-artery',
        number: 5,
        text: 'Regarding the brachial artery, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'The median nerve lies on the medial of its upper half.' },
          { id: 'b', text: 'It lies lateral to tendon of brachialis.' },
          { id: 'c', text: 'It is separated from median cubital vein by the bicipital aponeurosis.' },
          { id: 'd', text: 'It begins at the lower border of the teres minor.' }
        ],
        correctOptionId: 'c',
        explanation: 'In the cubital fossa, the bicipital aponeurosis ("grace a Dieu fascia") separates the superficial median cubital vein from the underlying brachial artery and median nerve.'
      },
      {
        id: 'brach-art-6',
        chapterId: 'brachial-artery',
        number: 6,
        text: 'The brachial artery; choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Starts at the distal border of teres major muscle.' },
          { id: 'b', text: 'Ends opposite the head of radius.' },
          { id: 'c', text: 'Descends on the medial side of the humerus.' },
          { id: 'd', text: 'It descends medial to ulnar nerve and bicipital aponeurosis.' }
        ],
        correctOptionId: 'a',
        explanation: 'The brachial artery commences at the lower (distal) border of the teres major muscle as the continuation of the axillary artery and ends opposite the neck of the radius.'
      },
      {
        id: 'brach-art-7',
        chapterId: 'brachial-artery',
        number: 7,
        text: 'Profunda brachii artery, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Arises from third part of axillary artery.' },
          { id: 'b', text: 'Passes with the ulnar nerve in the spiral groove.' },
          { id: 'c', text: 'Descends between medial and long heads of triceps.' },
          { id: 'd', text: 'It supplies biceps brachii muscle.' }
        ],
        correctOptionId: 'c',
        explanation: 'The profunda brachii artery arises from the upper part of the brachial artery, passes with the radial nerve in the spiral groove between the lateral, long, and medial heads of the triceps, and supplies the triceps.'
      },
      {
        id: 'brach-art-8',
        chapterId: 'brachial-artery',
        number: 8,
        text: "The following artery doesn't share in the anastomosis around the elbow:",
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Radial recurrent artery.' },
          { id: 'b', text: 'Anterior circumflex humeral artery.' },
          { id: 'c', text: 'Anterior ulnar recurrent artery.' },
          { id: 'd', text: 'Posterior ulnar recurrent artery.' }
        ],
        correctOptionId: 'b',
        explanation: 'The anterior circumflex humeral artery anastomoses around the surgical neck of the humerus, not the elbow joint.'
      },
      {
        id: 'brach-art-9',
        chapterId: 'brachial-artery',
        number: 9,
        text: 'Anastomosis around the lateral epicondyle of the elbow, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Between brachial artery and both ulnar and radial arteries.' },
          { id: 'b', text: 'Anterior interosseous artery shares in the anastomosis.' },
          { id: 'c', text: 'Present on the front of the lateral epicondyle only.' },
          { id: 'd', text: 'Maintains free blood flow when the elbow is fully flexed.' },
          { id: 'e', text: 'a and d.' }
        ],
        correctOptionId: 'e',
        explanation: 'The anastomosis around the lateral epicondyle connects the brachial artery (via profunda brachii branches) with both the radial artery (radial recurrent) and ulnar artery (interosseous recurrent), maintaining collateral circulation when the elbow is flexed.'
      },
      {
        id: 'brach-art-10',
        chapterId: 'brachial-artery',
        number: 10,
        text: 'The brachial artery, select the true answer:',
        source: '2022',
        options: [
          { id: 'a', text: 'In the cubital fossa, it lies medial to the biceps tendon.' },
          { id: 'b', text: 'Bifurcates opposite the neck of the humerus.' },
          { id: 'c', text: 'Is deep throughout its entire course.' },
          { id: 'd', text: 'The median nerve crosses in front of the artery from the medial to the lateral side.' }
        ],
        correctOptionId: 'a',
        explanation: 'In the cubital fossa (from lateral to medial: TAN = Tendon of biceps, Artery, Nerve), the brachial artery lies immediately medial to the biceps brachii tendon. The median nerve crosses the artery from lateral to medial at the mid-arm.'
      },
      {
        id: 'brach-art-11',
        chapterId: 'brachial-artery',
        number: 11,
        text: 'Concerning the brachial artery, select the correct statement:',
        source: '2021',
        options: [
          { id: 'a', text: 'Commences at the upper border of teres major.' },
          { id: 'b', text: 'Is in direct contact with the humerus.' },
          { id: 'c', text: 'Has median nerve lying medial to it in the cubital fossa.' },
          { id: 'd', text: 'Is accompanied throughout its course by the basilic vein.' }
        ],
        correctOptionId: 'c',
        explanation: 'In the cubital fossa, the median nerve lies immediately medial to the brachial artery.'
      },
      {
        id: 'brach-art-12',
        chapterId: 'brachial-artery',
        number: 12,
        text: 'One of the branches of brachial artery:',
        source: '2025',
        options: [
          { id: 'a', text: 'Posterior circumflex humeral artery' },
          { id: 'b', text: 'Circumflex scapular artery' },
          { id: 'c', text: 'Subscapular artery' },
          { id: 'd', text: 'Superior ulnar collateral artery' }
        ],
        correctOptionId: 'd',
        explanation: 'The superior ulnar collateral artery arises from the brachial artery near the middle of the arm and accompanies the ulnar nerve through the medial intermuscular septum.'
      }
    ]
  },
  {
    id: 'back-of-arm',
    number: 12,
    title: 'Muscles of Back of Arm',
    regionGroup: 'Arm & Cubital Fossa',
    description: 'Triceps brachii (long, lateral, and medial heads), olecranon insertion, and posterior compartment innervation.',
    questions: [
      {
        id: 'back-arm-1',
        chapterId: 'back-of-arm',
        number: 1,
        text: 'Regarding the triceps brachii muscle:',
        source: '2024 - 25',
        options: [
          { id: 'a', text: 'It has a lateral, a medial and a short head.' },
          { id: 'b', text: 'Long head takes origin from supraglenoid tubercle of scapula.' },
          { id: 'c', text: 'It is supplied by ulnar nerve.' },
          { id: 'd', text: 'It is inserted into the olecranon process.' }
        ],
        correctOptionId: 'd',
        explanation: 'Triceps brachii has three heads (long, lateral, and medial), is innervated by the radial nerve, and inserts into the posterior part of the superior surface of the olecranon process of the ulna.'
      },
      {
        id: 'back-arm-2',
        chapterId: 'back-of-arm',
        number: 2,
        text: 'The distal attachment of the triceps brachii muscle is:',
        source: 'IPKA - DEP BOOK',
        options: [
          { id: 'a', text: 'Coronoid process of the ulna.' },
          { id: 'b', text: 'Olecranon process of ulna.' },
          { id: 'c', text: 'Styloid process of ulna.' },
          { id: 'd', text: 'Radial notch of ulna.' }
        ],
        correctOptionId: 'b',
        explanation: 'The common tendon of triceps brachii inserts into the superior surface of the olecranon process of the ulna.'
      },
      {
        id: 'back-arm-3',
        chapterId: 'back-of-arm',
        number: 3,
        text: 'The true statement about posterior compartment of arm is:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'It receives motor supply from median nerve.' },
          { id: 'b', text: 'It receives motor supply from radial nerve.' },
          { id: 'c', text: 'It contains the musculocutaneous nerve.' },
          { id: 'd', text: 'It contains the coracobrachialis muscle.' }
        ],
        correctOptionId: 'b',
        explanation: 'The posterior compartment of the arm (triceps brachii) receives its motor innervation from the radial nerve.'
      },
      {
        id: 'back-arm-4',
        chapterId: 'back-of-arm',
        number: 4,
        text: 'One of the following is correct regarding the brachial artery:',
        source: 'IPKA',
        options: [
          { id: 'a', text: 'Lies lateral to the basilic vein.' },
          { id: 'b', text: 'Lies anterior to the cephalic vein.' },
          { id: 'c', text: 'Is crossed posteriorly by the median nerve in all population.' },
          { id: 'd', text: 'Runs parallel but deep to the profunda brachii artery.' },
          { id: 'e', text: 'Is the continuation of the subclavian artery.' }
        ],
        correctOptionId: 'a',
        explanation: 'The brachial artery lies lateral to the basilic vein in the arm.'
      }
    ]
  },
  {
    id: 'radial-nerve-axilla-arm',
    number: 13,
    title: 'Radial Nerve in Axilla and Arm',
    regionGroup: 'Arm & Cubital Fossa',
    description: 'Root value (C5–T1), course in the axilla and radial (spiral) groove, muscular and cutaneous branches, and mid-shaft humerus fracture.',
    questions: [
      {
        id: 'rad-arm-1',
        chapterId: 'radial-nerve-axilla-arm',
        number: 1,
        text: 'The following nerve is related directly to the humerus:',
        source: '2019',
        options: [
          { id: 'a', text: 'Radial nerve.' },
          { id: 'b', text: 'Musculocutaneous nerve.' },
          { id: 'c', text: 'Median nerve.' },
          { id: 'd', text: 'Anterior interosseous nerve.' }
        ],
        correctOptionId: 'a',
        explanation: 'The radial nerve lies in direct contact with the posterior shaft of the humerus in the radial (spiral) groove.'
      },
      {
        id: 'rad-arm-2',
        chapterId: 'radial-nerve-axilla-arm',
        number: 2,
        text: 'One of the following muscles is supplied by radial nerve:',
        source: '2018',
        options: [
          { id: 'a', text: 'Biceps brachii.' },
          { id: 'b', text: 'Coracobrachialis.' },
          { id: 'c', text: 'Teres minor.' },
          { id: 'd', text: 'Anconeus.' }
        ],
        correctOptionId: 'd',
        explanation: 'Anconeus is supplied by a branch of the radial nerve (via the nerve to the medial head of triceps).'
      },
      {
        id: 'rad-arm-3',
        chapterId: 'radial-nerve-axilla-arm',
        number: 3,
        text: 'The brachioradialis muscle receives its nerve supply from:',
        source: '2018',
        options: [
          { id: 'a', text: 'The radial nerve.' },
          { id: 'b', text: 'The anterior interosseous nerve.' },
          { id: 'c', text: 'The posterior interosseous nerve.' },
          { id: 'd', text: 'The median nerve.' }
        ],
        correctOptionId: 'a',
        explanation: 'Brachioradialis (and extensor carpi radialis longus) receives its motor supply directly from the main trunk of the radial nerve above the lateral epicondyle before the nerve divides.'
      },
      {
        id: 'rad-arm-4',
        chapterId: 'radial-nerve-axilla-arm',
        number: 4,
        text: 'All of the following muscles are supplied by the radial nerve except:',
        source: 'DEP BOOK - IPKA',
        options: [
          { id: 'a', text: 'Medial head of triceps.' },
          { id: 'b', text: 'Anconeus.' },
          { id: 'c', text: 'Lateral head of triceps.' },
          { id: 'd', text: 'Biceps.' }
        ],
        correctOptionId: 'd',
        explanation: 'Biceps brachii is supplied by the musculocutaneous nerve; triceps and anconeus are supplied by the radial nerve.'
      },
      {
        id: 'rad-arm-5',
        chapterId: 'radial-nerve-axilla-arm',
        number: 5,
        text: 'The radial nerve, select the correct statement:',
        source: 'IPKA',
        options: [
          { id: 'a', text: 'Supplies extensors to the elbow.' },
          { id: 'b', text: 'Pierces the medial intermuscular septum of the mid arm.' },
          { id: 'c', text: 'Supplies extensor carpi ulnaris.' },
          { id: 'd', text: 'Runs on the lateral side of the radial artery in the forearm.' },
          { id: 'e', text: 'Runs medially in the cubital fossa.' }
        ],
        correctOptionId: 'a',
        explanation: 'The radial nerve supplies the extensors of the elbow (triceps and anconeus), pierces the lateral intermuscular septum, runs laterally in the cubital fossa, and its posterior interosseous branch supplies extensor carpi ulnaris.'
      },
      {
        id: 'rad-arm-6',
        chapterId: 'radial-nerve-axilla-arm',
        number: 6,
        text: 'The radial nerve consists of the following roots; choose the correct answers:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Nerve roots C6, 7 & 8.' },
          { id: 'b', text: 'Nerve root C6, 7 & 8.' },
          { id: 'c', text: 'Nerve roots C5, 6, 7, 8 and T1.' },
          { id: 'd', text: 'Nerve roots C5, 6, 7 and 8.' }
        ],
        correctOptionId: 'c',
        explanation: 'The radial nerve is the largest branch of the brachial plexus and receives fibers from all five roots: C5, C6, C7, C8, and T1.'
      },
      {
        id: 'rad-arm-7',
        chapterId: 'radial-nerve-axilla-arm',
        number: 7,
        text: 'The following muscle is innervated by the radial nerve:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Long head of biceps brachii.' },
          { id: 'b', text: 'Short head of biceps brachii.' },
          { id: 'c', text: 'Brachialis.' },
          { id: 'd', text: 'Coracobrachialis.' }
        ],
        correctOptionId: 'c',
        explanation: 'The lateral part of the brachialis muscle receives a small branch from the radial nerve (in addition to its main supply from the musculocutaneous nerve).'
      },
      {
        id: 'rad-arm-8',
        chapterId: 'radial-nerve-axilla-arm',
        number: 8,
        text: 'The radial nerve, around the elbow, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Comes in contact with the medial epicondyle of the humerus.' },
          { id: 'b', text: 'Passes between biceps brachii and brachioradialis.' },
          { id: 'c', text: 'Pierces the lateral intermuscular septum and passes between brachialis and both brachioradialis and extensor carpi radialis longus.' },
          { id: 'd', text: 'Passes between extensor carpi radialis longus and brevis.' }
        ],
        correctOptionId: 'c',
        explanation: 'In the lower third of the arm, the radial nerve pierces the lateral intermuscular septum to enter the anterior compartment, descending in the groove between brachialis medially and brachioradialis/ECRL laterally.'
      },
      {
        id: 'rad-arm-9',
        chapterId: 'radial-nerve-axilla-arm',
        number: 9,
        text: 'The nerve commonly injured following fracture of the middle of the shaft (mid-shaft) of humerus is:',
        source: '2019 - DEP BOOK - 2025',
        options: [
          { id: 'a', text: 'Axillary nerve.' },
          { id: 'b', text: 'Ulnar nerve.' },
          { id: 'c', text: 'Radial nerve.' },
          { id: 'd', text: 'Median nerve.' }
        ],
        correctOptionId: 'c',
        explanation: 'The radial nerve lies directly against the mid-shaft of the humerus in the radial (spiral) groove and is the nerve most frequently injured in mid-shaft humeral fractures.'
      },
      {
        id: 'rad-arm-10',
        chapterId: 'radial-nerve-axilla-arm',
        number: 10,
        text: 'Which of the following is NOT a branch of the radial nerve?',
        source: '2022 - 2021',
        options: [
          { id: 'a', text: 'Posterior cutaneous nerve of the arm.' },
          { id: 'b', text: 'Posterior cutaneous nerve of the forearm.' },
          { id: 'c', text: 'Lower lateral cutaneous nerve of the arm.' },
          { id: 'd', text: 'Upper lateral cutaneous nerve of the arm.' }
        ],
        correctOptionId: 'd',
        explanation: 'The upper lateral cutaneous nerve of the arm is a branch of the axillary nerve, whereas the posterior cutaneous nerve of the arm, lower lateral cutaneous nerve of the arm, and posterior cutaneous nerve of the forearm all arise from the radial nerve.'
      },
      {
        id: 'rad-arm-11',
        chapterId: 'radial-nerve-axilla-arm',
        number: 11,
        text: 'Regarding the radial nerve, choose the correct answer:',
        source: '2021',
        options: [
          { id: 'a', text: 'It runs with profunda brachii artery in the radial groove.' },
          { id: 'b', text: 'It contains fibers from C5, 6, 7, 8 only.' },
          { id: 'c', text: 'It has no cutaneous branches in the upper arm.' },
          { id: 'd', text: 'Gives off the posterior interosseous nerve in the spiral groove.' }
        ],
        correctOptionId: 'a',
        explanation: 'The radial nerve runs accompanied by the profunda brachii vessels in the radial (spiral) groove on the posterior aspect of the humerus.'
      },
      {
        id: 'rad-arm-12',
        chapterId: 'radial-nerve-axilla-arm',
        number: 12,
        text: 'The radial nerve supplies the following muscle in the axilla:',
        source: '2019',
        options: [
          { id: 'a', text: 'Long head of triceps.' },
          { id: 'b', text: 'Lateral head of triceps.' },
          { id: 'c', text: 'Long head of biceps.' },
          { id: 'd', text: 'Anconeus.' }
        ],
        correctOptionId: 'a',
        explanation: 'In the axilla (before entering the spiral groove), the radial nerve gives off the nerve to the long head of triceps, a branch to the medial head of triceps, and the posterior cutaneous nerve of the arm.'
      }
    ]
  },
  {
    id: 'front-of-forearm',
    number: 14,
    title: 'Muscles of Front of Forearm',
    regionGroup: 'Forearm & Wrist',
    description: 'Superficial and deep flexors and pronators of the forearm, interosseous membrane attachments, and dual innervation of FDP.',
    questions: [
      {
        id: 'front-forearm-1',
        chapterId: 'front-of-forearm',
        number: 1,
        text: 'The tendon of the following muscle passes superficial to the flexor retinaculum at the wrist:',
        source: '2017',
        options: [
          { id: 'a', text: 'Flexor digitorum superficialis.' },
          { id: 'b', text: 'Flexor digitorum profundus.' },
          { id: 'c', text: 'Palmaris longus.' },
          { id: 'd', text: 'Flexor carpi radialis.' }
        ],
        correctOptionId: 'c',
        explanation: 'The tendon of palmaris longus passes superficial to the flexor retinaculum to insert into its anterior surface and the apex of the palmar aponeurosis.'
      },
      {
        id: 'front-forearm-2',
        chapterId: 'front-of-forearm',
        number: 2,
        text: 'The superficial muscles of front of forearm include:',
        source: '2024',
        options: [
          { id: 'a', text: 'Pronator quadratus.' },
          { id: 'b', text: 'Flexor carpi radialis.' },
          { id: 'c', text: 'Flexor pollicis longus.' },
          { id: 'd', text: 'Supinator.' }
        ],
        correctOptionId: 'b',
        explanation: 'The superficial group of the anterior forearm consists of pronator teres, flexor carpi radialis, palmaris longus, flexor digitorum superficialis, and flexor carpi ulnaris.'
      },
      {
        id: 'front-forearm-3',
        chapterId: 'front-of-forearm',
        number: 3,
        text: 'A patient complaining of inability to flex the proximal interphalangeal joints. Which of the following muscles appear to be paralyzed?',
        source: 'IPKA',
        options: [
          { id: 'a', text: 'Palmar interossei.' },
          { id: 'b', text: 'Flexor digitorum profundus.' },
          { id: 'c', text: 'Flexor digitorum superficialis.' },
          { id: 'd', text: 'Lumbricals.' }
        ],
        correctOptionId: 'c',
        explanation: 'Flexor digitorum superficialis (FDS) inserts into the sides of the shaft of the middle phalanges of the medial four fingers and is the primary flexor of the proximal interphalangeal (PIP) joints.'
      },
      {
        id: 'front-forearm-4',
        chapterId: 'front-of-forearm',
        number: 4,
        text: 'The following are contents of deep group of anterior compartment of forearm except:',
        source: 'IPKA',
        options: [
          { id: 'a', text: 'Flexor pollicis longus.' },
          { id: 'b', text: 'Pronator teres.' },
          { id: 'c', text: 'Pronator quadratus.' },
          { id: 'd', text: 'Supinator muscles.' }
        ],
        correctOptionId: 'b',
        explanation: 'The deep group of the anterior compartment comprises flexor digitorum profundus, flexor pollicis longus, and pronator quadratus. Pronator teres is the most lateral muscle of the superficial group (Per PDF answer key: 4-b).'
      },
      {
        id: 'front-forearm-5',
        chapterId: 'front-of-forearm',
        number: 5,
        text: 'Regarding flexor carpi radialis muscle, all of the following are true except:',
        source: 'IPKA',
        options: [
          { id: 'a', text: 'Lateral muscle in the superficial layer of flexor compartment of forearm.' },
          { id: 'b', text: 'Take origin from the common flexor origin.' },
          { id: 'c', text: 'Flexor and abductor of the wrist.' },
          { id: 'd', text: 'Innervated by the median nerve.' }
        ],
        correctOptionId: 'a',
        explanation: 'Pronator teres (not flexor carpi radialis) is the most lateral muscle in the superficial layer of the flexor compartment of the forearm.'
      },
      {
        id: 'front-forearm-6',
        chapterId: 'front-of-forearm',
        number: 6,
        text: 'The lateral half of the flexor digitorum profundus is supplied by:',
        source: 'IPKA',
        options: [
          { id: 'a', text: 'Ulnar nerve.' },
          { id: 'b', text: 'Anterior interosseous nerve.' },
          { id: 'c', text: 'Both ulnar and median nerves.' },
          { id: 'd', text: 'Posterior interosseous nerve.' }
        ],
        correctOptionId: 'b',
        explanation: 'Flexor digitorum profundus has dual innervation: its lateral half (to index and middle fingers) is supplied by the anterior interosseous branch of the median nerve, while its medial half (to ring and little fingers) is supplied by the ulnar nerve.'
      },
      {
        id: 'front-forearm-7',
        chapterId: 'front-of-forearm',
        number: 7,
        text: 'All the following are contents of anterior compartment of forearm except:',
        source: 'IPKA',
        options: [
          { id: 'a', text: 'Flexor digitorum superficialis.' },
          { id: 'b', text: 'Pronator teres.' },
          { id: 'c', text: 'Pronator quadratus.' },
          { id: 'd', text: 'Brachioradialis.' }
        ],
        correctOptionId: 'd',
        explanation: 'Brachioradialis belongs to the superficial group of the posterior (extensor) compartment of the forearm and is supplied by the radial nerve.'
      },
      {
        id: 'front-forearm-8',
        chapterId: 'front-of-forearm',
        number: 8,
        text: 'Which of the following is true about flexor digitorum superficialis?',
        source: 'IPKA',
        options: [
          { id: 'a', text: 'All four tendons lie on the same plane under flexor retinaculum.' },
          { id: 'b', text: 'Is innervated by median and ulnar nerves.' },
          { id: 'c', text: 'Tendon to index finger separates before other three tendons high in forearm.' },
          { id: 'd', text: 'Median nerve passes between its two heads.' }
        ],
        correctOptionId: 'd',
        explanation: 'The median nerve enters the forearm between the two heads of pronator teres and then passes beneath the tendinous arch connecting the humeroulnar and radial heads of flexor digitorum superficialis.'
      },
      {
        id: 'front-forearm-9',
        chapterId: 'front-of-forearm',
        number: 9,
        text: 'Which of the following IS NOT true about the flexor carpi ulnaris:',
        source: 'IPKA',
        options: [
          { id: 'a', text: 'Acts as a synergist during wrist extension.' },
          { id: 'b', text: 'Inserts into base of fifth metacarpal.' },
          { id: 'c', text: 'Most medial muscles arising from the common flexor origin.' },
          { id: 'd', text: 'Ulnar nerve passes between its two heads.' }
        ],
        correctOptionId: 'a',
        explanation: 'Flexor carpi ulnaris is a wrist flexor and adductor (ulnar deviator), not a synergist during wrist extension. Its tendon inserts into the pisiform, hook of hamate, and base of the 5th metacarpal.'
      },
      {
        id: 'front-forearm-10',
        chapterId: 'front-of-forearm',
        number: 10,
        text: 'Name the nerve which innervates the flexor pollicis longus:',
        source: '2019 - IPKA',
        options: [
          { id: 'a', text: 'Anterior interosseous.' },
          { id: 'b', text: 'Median.' },
          { id: 'c', text: 'Ulnar.' },
          { id: 'd', text: 'Radial.' },
          { id: 'e', text: 'Musculocutaneous.' }
        ],
        correctOptionId: 'a',
        explanation: 'Flexor pollicis longus (along with pronator quadratus and the lateral half of FDP) is supplied by the anterior interosseous nerve, a branch of the median nerve.'
      },
      {
        id: 'front-forearm-11',
        chapterId: 'front-of-forearm',
        number: 11,
        text: 'The ulnar nerve innervates which of the following muscles in the flexor compartment:',
        source: 'IPKA',
        options: [
          { id: 'a', text: 'The medial part of the flexor digitorum superficialis.' },
          { id: 'b', text: 'Flexor carpi radialis.' },
          { id: 'c', text: 'Pronator quadratus.' },
          { id: 'd', text: 'Pronator teres.' },
          { id: 'e', text: 'The medial part of flexor digitorum profundus.' }
        ],
        correctOptionId: 'e',
        explanation: 'In the forearm, the ulnar nerve supplies only one and a half muscles: flexor carpi ulnaris and the medial half of flexor digitorum profundus.'
      },
      {
        id: 'front-forearm-12',
        chapterId: 'front-of-forearm',
        number: 12,
        text: 'Which muscle does NOT cross the elbow joint?',
        source: 'IPKA',
        options: [
          { id: 'a', text: 'Flexor pollicis longus.' },
          { id: 'b', text: 'Pronator teres.' },
          { id: 'c', text: 'Flexor carpi radialis.' },
          { id: 'd', text: 'Flexor carpi ulnaris.' },
          { id: 'e', text: 'Flexor digitorum superficialis.' }
        ],
        correctOptionId: 'a',
        explanation: 'Flexor pollicis longus arises from the anterior surface of the shaft of the radius below the radial tuberosity and the adjacent interosseous membrane; therefore it does not cross the elbow joint.'
      },
      {
        id: 'front-forearm-13',
        chapterId: 'front-of-forearm',
        number: 13,
        text: 'The flexor digitorum profundus, choose correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Receives double nerve supply.' },
          { id: 'b', text: 'Inserted into the front of middle phalanx.' },
          { id: 'c', text: 'Flexes the lateral four fingers.' },
          { id: 'd', text: 'Arises from radius, ulna and interosseous membrane.' }
        ],
        correctOptionId: 'a',
        explanation: 'Flexor digitorum profundus is a classic hybrid muscle receiving double innervation from the anterior interosseous nerve (lateral half) and ulnar nerve (medial half). It arises from the ulna and interosseous membrane (not radius) and inserts into the bases of the distal phalanges of the medial four fingers.'
      },
      {
        id: 'front-forearm-14',
        chapterId: 'front-of-forearm',
        number: 14,
        text: 'Mark muscle which receives innervation from 2 different nerves:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Biceps brachii.' },
          { id: 'b', text: 'Pronator teres.' },
          { id: 'c', text: 'Flexor digitorum profundus.' },
          { id: 'd', text: 'Flexor digitorum superficialis.' }
        ],
        correctOptionId: 'c',
        explanation: 'Flexor digitorum profundus receives motor innervation from both the median (anterior interosseous) and ulnar nerves.'
      },
      {
        id: 'front-forearm-15',
        chapterId: 'front-of-forearm',
        number: 15,
        text: 'Anterior aspect of interosseous membrane gives attachment to:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Flexor pollicis longus and flexor digitorum profundus.' },
          { id: 'b', text: 'Flexor digitorum superficialis.' },
          { id: 'c', text: 'Pronator teres.' },
          { id: 'd', text: 'Flexor carpi ulnaris.' }
        ],
        correctOptionId: 'a',
        explanation: 'The anterior surface of the interosseous membrane gives origin laterally to flexor pollicis longus and medially to flexor digitorum profundus.'
      },
      {
        id: 'front-forearm-16',
        chapterId: 'front-of-forearm',
        number: 16,
        text: 'The flexor pollicis longus muscle, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Arises from anterior surface of the ulna and interosseous membrane.' },
          { id: 'b', text: 'Is inserted in palmar side of the distal phalanx of thumb.' },
          { id: 'c', text: 'Is innervated by branch from posterior interosseous nerve.' },
          { id: 'd', text: 'Helps in adduction of wrist joint.' }
        ],
        correctOptionId: 'b',
        explanation: 'Flexor pollicis longus arises from the anterior surface of the radius and interosseous membrane, is innervated by the anterior interosseous nerve, and inserts into the palmar aspect of the base of the distal phalanx of the thumb.'
      },
      {
        id: 'front-forearm-17',
        chapterId: 'front-of-forearm',
        number: 17,
        text: 'The interosseous membrane, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Is attached to the anterior borders of radius and ulna.' },
          { id: 'b', text: 'Gives origin to abductor pollicis brevis.' },
          { id: 'c', text: 'Gives origin to the deep flexors of the hand.' },
          { id: 'd', text: 'Pierced by posterior interosseous vessels.' }
        ],
        correctOptionId: 'c',
        explanation: 'The interosseous membrane connects the interosseous borders of the radius and ulna and gives origin to the deep flexors (FDP and FPL) anteriorly and deep extensors posteriorly.'
      },
      {
        id: 'front-forearm-18',
        chapterId: 'front-of-forearm',
        number: 18,
        text: 'Flexor digitorum superficialis produce the following action:',
        source: 'DEP BOOK - 2021',
        options: [
          { id: 'a', text: 'Flex all joints of thumb.' },
          { id: 'b', text: 'Abduction of little finger.' },
          { id: 'c', text: 'Flex proximal interphalangeal joints of medial four fingers.' },
          { id: 'd', text: 'Flex distal interphalangeal joints of medial four fingers.' }
        ],
        correctOptionId: 'c',
        explanation: 'Flexor digitorum superficialis flexes the proximal interphalangeal (PIP) joints (and secondarily the MCP and wrist joints) of the medial four digits.'
      },
      {
        id: 'front-forearm-19',
        chapterId: 'front-of-forearm',
        number: 19,
        text: 'Flexor carpi ulnaris can produce all the following except:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Flexion of wrist.' },
          { id: 'b', text: 'Adduction of wrist.' },
          { id: 'c', text: 'Abduction of wrist.' },
          { id: 'd', text: 'Flexion of distal interphalangeal joint of little finger.' },
          { id: 'e', text: 'c and d.' }
        ],
        correctOptionId: 'e',
        explanation: 'Flexor carpi ulnaris flexes and adducts (ulnar deviates) the wrist joint; it cannot abduct the wrist or flex the distal interphalangeal joint of the little finger (hence both c and d are false).'
      },
      {
        id: 'front-forearm-20',
        chapterId: 'front-of-forearm',
        number: 20,
        text: 'The muscle takes origin from the radius is:',
        source: '2022',
        options: [
          { id: 'a', text: 'Biceps.' },
          { id: 'b', text: 'Supinator.' },
          { id: 'c', text: 'Pronator quadratus.' },
          { id: 'd', text: 'Flexor pollicis longus.' }
        ],
        correctOptionId: 'd',
        explanation: 'Flexor pollicis longus takes origin from the anterior surface of the shaft of the radius, whereas biceps and supinator insert into the radius, and pronator quadratus arises from the ulna and inserts into the radius.'
      },
      {
        id: 'front-forearm-21',
        chapterId: 'front-of-forearm',
        number: 21,
        text: 'One of the following muscles cannot perform flexion of the wrist:',
        source: '2022',
        options: [
          { id: 'a', text: 'Pronator quadratus.' },
          { id: 'b', text: 'Flexor pollicis longus.' },
          { id: 'c', text: 'Flexor digitorum profundus.' },
          { id: 'd', text: 'Flexor carpi ulnaris.' }
        ],
        correctOptionId: 'a',
        explanation: 'Pronator quadratus runs transversely between the distal ends of the ulna and radius without crossing the wrist joint, so it acts exclusively as a forearm pronator.'
      },
      {
        id: 'front-forearm-22',
        chapterId: 'front-of-forearm',
        number: 22,
        text: 'The flexor digitorum profundus, mark the wrong statement:',
        source: '2022',
        options: [
          { id: 'a', text: 'Receives double nerve supply.' },
          { id: 'b', text: 'Inserted into the front of distal phalanx.' },
          { id: 'c', text: 'Flexes the medial four fingers.' },
          { id: 'd', text: 'Arises from radius, ulna and interosseous membrane.' }
        ],
        correctOptionId: 'd',
        explanation: 'Flexor digitorum profundus arises from the upper three-fourths of the anterior and medial surfaces of the ulna and the medial half of the interosseous membrane—it has NO origin from the radius.'
      },
      {
        id: 'front-forearm-23',
        chapterId: 'front-of-forearm',
        number: 23,
        text: 'A patient complaining of inability to flex the distal interphalangeal joints. Which of the following muscles appear to be paralyzed?',
        source: '2022 - 2021',
        options: [
          { id: 'a', text: 'Palmar interossei.' },
          { id: 'b', text: 'Lumbricals.' },
          { id: 'c', text: 'Flexor digitorum profundus.' },
          { id: 'd', text: 'Flexor digitorum superficialis.' }
        ],
        correctOptionId: 'c',
        explanation: 'Flexor digitorum profundus is the sole flexor of the distal interphalangeal (DIP) joints of the medial four fingers.'
      },
      {
        id: 'front-forearm-24',
        chapterId: 'front-of-forearm',
        number: 24,
        text: 'The palmaris longus tendon is a useful guide to which nerve at the wrist?',
        source: '2021',
        options: [
          { id: 'a', text: 'Median nerve.' },
          { id: 'b', text: 'Anterior interosseous nerve.' },
          { id: 'c', text: 'Posterior interosseous nerve.' },
          { id: 'd', text: 'Ulnar nerve.' }
        ],
        correctOptionId: 'a',
        explanation: 'At the wrist, the median nerve lies immediately deep and slightly lateral (between palmaris longus and flexor carpi radialis) to the palmaris longus tendon.'
      },
      {
        id: 'front-forearm-25',
        chapterId: 'front-of-forearm',
        number: 25,
        text: 'The muscle attached to the front of the interosseous membrane between radius and ulna is:',
        source: '2019',
        options: [
          { id: 'a', text: 'Pronator teres.' },
          { id: 'b', text: 'Flexor carpi radialis.' },
          { id: 'c', text: 'Flexor pollicis longus.' },
          { id: 'd', text: 'Flexor carpi ulnaris.' }
        ],
        correctOptionId: 'c',
        explanation: 'Flexor pollicis longus (and flexor digitorum profundus) arises from the anterior surface of the interosseous membrane.'
      },
      {
        id: 'front-forearm-26',
        chapterId: 'front-of-forearm',
        number: 26,
        text: 'A patient complaining that she cannot flex her distal interphalangeal joint of her right medial 4 fingers. Which of the following muscles appear to be paralyzed:',
        source: '2019',
        options: [
          { id: 'a', text: 'Palmar interossei.' },
          { id: 'b', text: 'Dorsal interossei.' },
          { id: 'c', text: 'Flexor digitorum profundus.' },
          { id: 'd', text: 'Flexor digitorum superficialis.' }
        ],
        correctOptionId: 'c',
        explanation: 'Flexor digitorum profundus flexes the distal interphalangeal joints of the medial four digits.'
      },
      {
        id: 'front-forearm-27',
        chapterId: 'front-of-forearm',
        number: 27,
        text: 'Pronator quadratus, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Arises from anterior surface of the distal fourth of the radius.' },
          { id: 'b', text: 'Inserted into anterior surface of the distal fourth of the ulna.' },
          { id: 'c', text: 'Pronates the forearm at radioulnar joints.' },
          { id: 'd', text: 'Is innervated by posterior interosseous nerve.' }
        ],
        correctOptionId: 'c',
        explanation: 'Pronator quadratus arises from the distal fourth of the ulna, inserts into the distal fourth of the radius, is innervated by the anterior interosseous nerve, and is the principal pronator of the forearm at the radioulnar joints.'
      },
      {
        id: 'front-forearm-28',
        chapterId: 'front-of-forearm',
        number: 28,
        text: 'Flexor pollicis longus:',
        source: '2025',
        options: [
          { id: 'a', text: 'Is a muscle of the superficial group of front of the forearm' },
          { id: 'b', text: 'Arises from the common flexor origin' },
          { id: 'c', text: 'Supplied by the interosseous branch of median nerve' },
          { id: 'd', text: 'Inserts into the radial border of the proximal phalanx' }
        ],
        correctOptionId: 'c',
        explanation: 'Flexor pollicis longus is a deep muscle of the anterior forearm supplied by the anterior interosseous branch of the median nerve.'
      }
    ]
  },
  {
    id: 'cubital-fossa',
    number: 15,
    title: 'Cubital Fossa',
    regionGroup: 'Arm & Cubital Fossa',
    description: 'Boundaries (pronator teres, brachioradialis, floor, and roof) and contents (median nerve, brachial artery, biceps tendon, radial nerve) from medial to lateral.',
    questions: [
      {
        id: 'cubital-1',
        chapterId: 'cubital-fossa',
        number: 1,
        text: 'One of the contents of the cubital fossa is:',
        source: '2017',
        options: [
          { id: 'a', text: 'Tendon of biceps muscle.' },
          { id: 'b', text: 'The bicipital aponeurosis.' },
          { id: 'c', text: 'Tendon of brachialis muscle.' },
          { id: 'd', text: 'Supinator muscle.' }
        ],
        correctOptionId: 'a',
        explanation: 'From medial to lateral (MBBR), the contents of the cubital fossa are: Median nerve, Brachial artery (and its terminal radial and ulnar branches), Biceps brachii tendon, and Radial nerve (with its posterior interosseous branch). Bicipital aponeurosis is in the roof, while brachialis and supinator form the floor.'
      },
      {
        id: 'cubital-2',
        chapterId: 'cubital-fossa',
        number: 2,
        text: 'The contents of cubital fossa include:',
        source: '2024',
        options: [
          { id: 'a', text: 'Brachial artery.' },
          { id: 'b', text: 'Musculocutaneous nerve.' },
          { id: 'c', text: 'Ulnar nerve.' },
          { id: 'd', text: 'Tendon of brachialis.' }
        ],
        correctOptionId: 'a',
        explanation: 'The terminal part of the brachial artery and the origins of the radial and ulnar arteries lie inside the cubital fossa.'
      },
      {
        id: 'cubital-3',
        chapterId: 'cubital-fossa',
        number: 3,
        text: 'Which of the following regarding cubital fossa is INCORRECT?',
        source: 'IPKA',
        options: [
          { id: 'a', text: 'Median nerve lies medial to the bicipital tendon.' },
          { id: 'b', text: 'Lateral cutaneous nerve of forearm lies on the tendon of biceps.' },
          { id: 'c', text: 'Radial nerve gives rise to posterior interosseous branch.' },
          { id: 'd', text: 'Pronator teres & brachioradialis form the medial & lateral borders.' },
          { id: 'e', text: 'Brachialis & supinator form the floor.' }
        ],
        correctOptionId: 'b',
        explanation: 'The lateral cutaneous nerve of the forearm emerges lateral to the biceps brachii tendon (not on it) in the roof of the cubital fossa.'
      },
      {
        id: 'cubital-4',
        chapterId: 'cubital-fossa',
        number: 4,
        text: 'Which of the following DOES NOT relate to the cubital fossa?',
        source: 'IPKA',
        options: [
          { id: 'a', text: 'Brachialis.' },
          { id: 'b', text: 'Supinator.' },
          { id: 'c', text: 'Line connecting the two humeral epicondyles.' },
          { id: 'd', text: 'Bicipital aponeurosis.' },
          { id: 'e', text: 'Ulnar nerve.' }
        ],
        correctOptionId: 'e',
        explanation: 'The ulnar nerve passes posterior to the medial epicondyle of the humerus and does not enter or bound the cubital fossa.'
      },
      {
        id: 'cubital-5',
        chapterId: 'cubital-fossa',
        number: 5,
        text: 'In the cubital fossa; select correct answer:',
        source: 'IPKA',
        options: [
          { id: 'a', text: 'The median nerve lies lateral to the brachial artery.' },
          { id: 'b', text: 'The ulnar artery lies superficial to pronator teres.' },
          { id: 'c', text: 'The radial artery originates from the brachial artery.' },
          { id: 'd', text: 'The radial nerve lies medial to the biceps tendon.' },
          { id: 'e', text: 'The nerve to pronator teres is derived from the radial nerve.' }
        ],
        correctOptionId: 'c',
        explanation: 'In the cubital fossa opposite the neck of the radius, the brachial artery bifurcates into the radial and ulnar arteries.'
      },
      {
        id: 'cubital-6',
        chapterId: 'cubital-fossa',
        number: 6,
        text: 'Regarding the cubital fossa:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'It is bounded laterally by the brachialis.' },
          { id: 'b', text: 'It is bounded medially by the pronator teres.' },
          { id: 'c', text: 'The basilic vein runs through its roof.' },
          { id: 'd', text: 'Median nerve lies in the fossa on the lateral side of brachial artery.' },
          { id: 'e', text: 'b and c.' }
        ],
        correctOptionId: 'e',
        explanation: 'The cubital fossa is bounded medially by pronator teres (b), and the superficial fascia of its roof contains the cephalic, basilic, and median cubital veins (c).'
      },
      {
        id: 'cubital-7',
        chapterId: 'cubital-fossa',
        number: 7,
        text: 'Regarding the structures passing in the roof of the cubital fossa, mark one correct statement:',
        source: 'DEP',
        options: [
          { id: 'a', text: 'Flexor digitorum superficialis.' },
          { id: 'b', text: 'Pronator teres.' },
          { id: 'c', text: 'Pronator quadratus.' },
          { id: 'd', text: 'Brachioradialis.' }
        ],
        correctOptionId: 'a',
        explanation: 'Note: In this DEP question, the options were misprinted from a forearm question on the original exam sheet, and the official answer key marks 7-a. Anatomically, the roof of the cubital fossa contains the skin, superficial fascia (cephalic, basilic, and median cubital veins; lateral and medial cutaneous nerves of the forearm), and deep fascia reinforced by the bicipital aponeurosis.'
      },
      {
        id: 'cubital-8',
        chapterId: 'cubital-fossa',
        number: 8,
        text: 'The following structure is a content of the cubital fossa:',
        source: 'DEP BOOK - 2025',
        options: [
          { id: 'a', text: 'Brachioradialis.' },
          { id: 'b', text: 'Median nerve.' },
          { id: 'c', text: 'Musculocutaneous.' },
          { id: 'd', text: 'Ulnar nerve.' },
          { id: 'e', text: 'Brachialis tendon.' }
        ],
        correctOptionId: 'b',
        explanation: 'The median nerve is the most medial content of the cubital fossa.'
      },
      {
        id: 'cubital-9',
        chapterId: 'cubital-fossa',
        number: 9,
        text: 'Concerning the boundaries of the cubital fossa:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'The floor is formed by the brachialis and supinator muscles.' },
          { id: 'b', text: 'The roof is formed by skin, fascia and bicipital aponeurosis.' },
          { id: 'c', text: 'Lateral boundary is formed by lateral margin of brachioradialis muscle.' },
          { id: 'd', text: 'Medial boundary is formed by medial margin of pronator teres muscle.' },
          { id: 'e', text: 'a and b.' }
        ],
        correctOptionId: 'e',
        explanation: 'The floor of the cubital fossa is formed by brachialis and supinator (a), and the roof is formed by skin, superficial/deep fascia, and the bicipital aponeurosis (b). Note that the lateral boundary is the medial border of brachioradialis, and the medial boundary is the lateral border of pronator teres.'
      },
      {
        id: 'cubital-10',
        chapterId: 'cubital-fossa',
        number: 10,
        text: 'Concerning the contents of cubital fossa, one is wrong:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Median nerve.' },
          { id: 'b', text: 'Termination of the radial artery.' },
          { id: 'c', text: 'Ulnar artery.' },
          { id: 'd', text: 'Radial nerve.' }
        ],
        correctOptionId: 'b',
        explanation: 'The cubital fossa contains the origin (beginning) of the radial and ulnar arteries and the termination of the brachial artery—not the termination of the radial artery (which terminates in the palm as the deep palmar arch).'
      },
      {
        id: 'cubital-11',
        chapterId: 'cubital-fossa',
        number: 11,
        text: 'One of the following is not a content of the cubital fossa:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Brachial artery.' },
          { id: 'b', text: 'Radial artery.' },
          { id: 'c', text: 'Ulnar nerve.' },
          { id: 'd', text: 'Median nerve.' }
        ],
        correctOptionId: 'c',
        explanation: 'The ulnar nerve passes behind the medial epicondyle and is not a content of the cubital fossa.'
      },
      {
        id: 'cubital-12',
        chapterId: 'cubital-fossa',
        number: 12,
        text: 'A 21-year-old man is stabbed in the cubital fossa. At operation the surgeon dissects down onto the brachial artery. A nerve is identified medially, which nerve is it likely to be?',
        source: '2021',
        options: [
          { id: 'a', text: 'Radial.' },
          { id: 'b', text: 'Anterior interosseous.' },
          { id: 'c', text: 'Ulnar.' },
          { id: 'd', text: 'Median.' }
        ],
        correctOptionId: 'd',
        explanation: 'In the cubital fossa, the median nerve lies immediately medial to the brachial artery.'
      },
      {
        id: 'cubital-13',
        chapterId: 'cubital-fossa',
        number: 13,
        text: 'In the cubital fossa, select the true statement:',
        source: '2021',
        options: [
          { id: 'a', text: 'The floor is formed only by the supinator.' },
          { id: 'b', text: 'The medial boundary is formed by pronator teres.' },
          { id: 'c', text: 'The ulnar nerve lies lateral to the brachial artery.' },
          { id: 'd', text: 'The radial nerve lies medial to the biceps tendon.' }
        ],
        correctOptionId: 'b',
        explanation: 'The medial boundary of the cubital fossa is formed by the lateral border of the pronator teres muscle.'
      },
      {
        id: 'cubital-14',
        chapterId: 'cubital-fossa',
        number: 14,
        text: 'In the cubital fossa, select the true answer:',
        source: '2021',
        options: [
          { id: 'a', text: 'Median nerve lies lateral to the biceps tendon.' },
          { id: 'b', text: 'Radial nerve and interosseous branch lie deep to the brachialis muscle.' },
          { id: 'c', text: 'Radial artery passes between the two heads of the pronator teres.' },
          { id: 'd', text: 'Radial nerve leaves the fossa between the heads of the supinator muscle.' }
        ],
        correctOptionId: 'd',
        explanation: 'The deep branch of the radial nerve (posterior interosseous nerve) leaves the cubital fossa by piercing and passing between the two heads of the supinator muscle.'
      },
      {
        id: 'cubital-15',
        chapterId: 'cubital-fossa',
        number: 15,
        text: 'One of the following structures passes in the roof of the cubital fossa:',
        source: '2019',
        options: [
          { id: 'a', text: 'Cephalic vein.' },
          { id: 'b', text: 'Radial nerve.' },
          { id: 'c', text: 'Posterior cutaneous nerve of the forearm.' },
          { id: 'd', text: 'Median nerve.' }
        ],
        correctOptionId: 'a',
        explanation: 'The cephalic vein, basilic vein, and median cubital vein run in the superficial fascia forming the roof of the cubital fossa.'
      },
      {
        id: 'cubital-16',
        chapterId: 'cubital-fossa',
        number: 16,
        text: 'The best site for giving an intravenous injection is:',
        source: '2025',
        options: [
          { id: 'a', text: 'Cephalic vein at the origin' },
          { id: 'b', text: 'Cephalic vein at delto-pectoral groove' },
          { id: 'c', text: 'Basilic vein' },
          { id: 'd', text: 'Median cubital vein' }
        ],
        correctOptionId: 'd',
        explanation: 'The median cubital vein in the roof of the cubital fossa is the preferred site for venipuncture and intravenous injections because it is superficial, well-supported by the underlying bicipital aponeurosis, and fixed in position by perforating veins.'
      }
    ]
  },
  {
    id: 'hand',
    number: 16,
    title: 'Hand',
    regionGroup: 'Hand & Nerves',
    description: 'Intrinsic muscles of the hand (thenar, hypothenar, lumbricals, palmar and dorsal interossei), palmar aponeurosis, synovial flexor sheaths, and fascial spaces.',
    questions: [
      {
        id: 'hand-1',
        chapterId: 'hand',
        number: 1,
        text: 'The median nerve innervates the following muscle:',
        source: '2019',
        options: [
          { id: 'a', text: 'Extensor carpi ulnaris.' },
          { id: 'b', text: 'Abductor pollicis brevis.' },
          { id: 'c', text: 'Medial two lumbricals.' },
          { id: 'd', text: 'Adductor pollicis.' }
        ],
        correctOptionId: 'b',
        explanation: 'In the hand, the median nerve (via its recurrent branch) innervates the three thenar muscles: abductor pollicis brevis, flexor pollicis brevis, and opponens pollicis, plus the lateral two lumbricals.'
      },
      {
        id: 'hand-2',
        chapterId: 'hand',
        number: 2,
        text: 'The median nerve innervates the following muscle:',
        source: '2019',
        options: [
          { id: 'a', text: 'Extensor carpi ulnaris.' },
          { id: 'b', text: 'Hypothenar muscles.' },
          { id: 'c', text: 'Lateral two lumbricals.' },
          { id: 'd', text: 'Adductor pollicis.' }
        ],
        correctOptionId: 'c',
        explanation: 'The palmar digital branches of the median nerve supply the 1st and 2nd (lateral two) lumbrical muscles.'
      },
      {
        id: 'hand-3',
        chapterId: 'hand',
        number: 3,
        text: 'The extensor expansion of which of the following fingers receives the tendon of the fourth posterior (dorsal) interosseous muscle:',
        source: '2018',
        options: [
          { id: 'a', text: 'Index.' },
          { id: 'b', text: 'Middle.' },
          { id: 'c', text: 'Ring.' },
          { id: 'd', text: 'Little.' }
        ],
        correctOptionId: 'c',
        explanation: 'The four dorsal interossei abduct the fingers away from the axial line of the middle finger: 1st attaches to the lateral side of the index finger, 2nd and 3rd to the lateral and medial sides of the middle finger, and 4th to the medial side of the ring finger.'
      },
      {
        id: 'hand-4',
        chapterId: 'hand',
        number: 4,
        text: 'The ulnar nerve innervates the following muscle (printed as second Q3 on p.41):',
        source: '2017 - 2016',
        options: [
          { id: 'a', text: 'Extensor carpi radialis.' },
          { id: 'b', text: 'Adductor pollicis.' },
          { id: 'c', text: 'Extensor carpi ulnaris.' },
          { id: 'd', text: 'Lateral two lumbricals.' },
          { id: 'e', text: 'Pronator teres.' },
          { id: 'f', text: 'Flexor pollicis longus.' }
        ],
        correctOptionId: 'b',
        explanation: 'The deep branch of the ulnar nerve terminates by supplying the adductor pollicis muscle.'
      },
      {
        id: 'hand-5',
        chapterId: 'hand',
        number: 5,
        text: 'Dorsal interossei are supplied by:',
        source: '2017',
        options: [
          { id: 'a', text: 'Superficial branch of the ulnar nerve.' },
          { id: 'b', text: 'Deep branch of the ulnar nerve.' },
          { id: 'c', text: 'Lateral terminal division of the median nerve.' },
          { id: 'd', text: 'Medial terminal division of the median nerve.' }
        ],
        correctOptionId: 'b',
        explanation: 'All palmar and dorsal interossei are innervated by the deep branch of the ulnar nerve.'
      },
      {
        id: 'hand-6',
        chapterId: 'hand',
        number: 6,
        text: 'The muscles supplied by deep branch of ulnar nerve in hand include:',
        source: '2024',
        options: [
          { id: 'a', text: 'Abductor pollicis brevis.' },
          { id: 'b', text: 'Flexor pollicis brevis.' },
          { id: 'c', text: 'Lateral two lumbricals.' },
          { id: 'd', text: 'All interossei.' }
        ],
        correctOptionId: 'd',
        explanation: 'The deep branch of the ulnar nerve supplies the hypothenar muscles, all palmar and dorsal interossei, the 3rd and 4th (medial two) lumbricals, and adductor pollicis.'
      },
      {
        id: 'hand-7',
        chapterId: 'hand',
        number: 7,
        text: 'Opposition of the thumb is dependent upon the functional integrity of this nerve:',
        source: '2024',
        options: [
          { id: 'a', text: 'Axillary nerve.' },
          { id: 'b', text: 'Median nerve.' },
          { id: 'c', text: 'Radial nerve.' },
          { id: 'd', text: 'Ulnar nerve.' }
        ],
        correctOptionId: 'b',
        explanation: 'Opponens pollicis (responsible for thumb opposition) is supplied by the recurrent branch of the median nerve.'
      },
      {
        id: 'hand-8',
        chapterId: 'hand',
        number: 8,
        text: 'The mid-palmar space (central compartment) of the palm contains the:',
        source: '2024',
        options: [
          { id: 'a', text: 'Terminal branches of musculocutaneous nerve.' },
          { id: 'b', text: 'Ulnar synovial bursa.' },
          { id: 'c', text: 'Lumbrical muscles.' },
          { id: 'd', text: 'Tendon of flexor carpi ulnaris muscle.' }
        ],
        correctOptionId: 'b',
        explanation: 'The central compartment / mid-palmar region of the palm contains the flexor tendons enclosed in the ulnar synovial bursa, superficial palmar arch, digital vessels and nerves, and medial lumbricals (Per answer key: 8-b).'
      },
      {
        id: 'hand-9',
        chapterId: 'hand',
        number: 9,
        text: 'What is the innervation of the lumbrical muscles?',
        source: '2024 - 25',
        options: [
          { id: 'a', text: 'All ulnar n.' },
          { id: 'b', text: 'All radial n.' },
          { id: 'c', text: 'All median n.' },
          { id: 'd', text: 'Half median & half ulnar nerves.' }
        ],
        correctOptionId: 'd',
        explanation: 'The 1st and 2nd (lateral two, unipennate) lumbricals are innervated by the median nerve, while the 3rd and 4th (medial two, bipennate) lumbricals are innervated by the deep branch of the ulnar nerve.'
      },
      {
        id: 'hand-10',
        chapterId: 'hand',
        number: 10,
        text: 'The thenar eminence consists of, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Abductor pollicis brevis and adductor pollicis.' },
          { id: 'b', text: 'Flexor pollicis longus.' },
          { id: 'c', text: 'Abductor pollicis brevis, opponens pollicis, flexor pollicis brevis.' },
          { id: 'd', text: 'Flexor pollicis longus, abductor pollicis longus.' }
        ],
        correctOptionId: 'c',
        explanation: 'The thenar eminence is formed by three short intrinsic muscles of the thumb: abductor pollicis brevis, flexor pollicis brevis, and opponens pollicis.'
      },
      {
        id: 'hand-11',
        chapterId: 'hand',
        number: 11,
        text: 'Regarding the thenar space of the hand, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'It is bounded laterally by the medial septum of the palmar aponeurosis.' },
          { id: 'b', text: 'It is bounded posteriorly by the fascia covering the adductor pollicis.' },
          { id: 'c', text: 'It contains the tendon of the digitorum profundus.' },
          { id: 'd', text: 'It contains three medial lumbricals.' }
        ],
        correctOptionId: 'b',
        explanation: 'The thenar fascial space lies anterior to the fascia covering the transverse head of the adductor pollicis muscle (which forms its posterior wall) and lateral to the intermediate palmar septum.'
      },
      {
        id: 'hand-12',
        chapterId: 'hand',
        number: 12,
        text: 'Regarding the mid palmar space of the hand, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'It contains the two lateral lumbricals.' },
          { id: 'b', text: 'It is bounded medially by the intermediate septum of the palmar aponeurosis.' },
          { id: 'c', text: 'It contains the superficial palmar arch.' },
          { id: 'd', text: 'It contains the superficial branch of the ulnar nerve.' }
        ],
        correctOptionId: 'c',
        explanation: 'Per the DEP BOOK answer key (12-c), the central palmar compartment/space is associated with the superficial palmar arch, digital vessels and nerves, flexor tendons to the medial three fingers, and the medial तीन lumbricals.'
      },
      {
        id: 'hand-13',
        chapterId: 'hand',
        number: 13,
        text: 'The palmar aponeurosis; choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Gives origin to palmaris longus muscle.' },
          { id: 'b', text: 'Gives origin to the lumbrical muscles.' },
          { id: 'c', text: 'Gives insertion to the adductor pollicis muscle.' },
          { id: 'd', text: 'Gives origin to the opponens pollicis muscle.' }
        ],
        correctOptionId: 'd',
        explanation: 'Per the DEP BOOK answer key (13-d; note that palmaris brevis arises from the medial border of the palmar aponeurosis, while the apex receives the insertion of palmaris longus).'
      },
      {
        id: 'hand-14',
        chapterId: 'hand',
        number: 14,
        text: 'Synovial sheath of digital flexors encloses, mark correct statement:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Flexor digitorum brevis.' },
          { id: 'b', text: 'Flexor digitorum profundus.' },
          { id: 'c', text: 'Flexor pollicis brevis.' },
          { id: 'd', text: 'Flexor carpi radialis.' }
        ],
        correctOptionId: 'b',
        explanation: 'The digital synovial sheaths (and ulnar bursa) enclose the tendons of flexor digitorum superficialis and flexor digitorum profundus.'
      },
      {
        id: 'hand-15',
        chapterId: 'hand',
        number: 15,
        text: 'The palmar thenar space contains, mark the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Flexor pollicis longus tendon.' },
          { id: 'b', text: 'Flexor tendons of the middle 3 fingers.' },
          { id: 'c', text: 'The 2nd lumbrical muscle.' },
          { id: 'd', text: 'Deep palmar arch.' }
        ],
        correctOptionId: 'a',
        explanation: 'The thenar space is related anteriorly to the flexor tendons of the index finger, the 1st lumbrical muscle, and the tendon of flexor pollicis longus in its radial bursa (Per DEP BOOK key: 15-a).'
      },
      {
        id: 'hand-16',
        chapterId: 'hand',
        number: 16,
        text: 'Flexor pollicis brevis; choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Arises from flexor retinaculum and tubercle of trapezium.' },
          { id: 'b', text: 'Lies on the lateral to abductor pollicis brevis.' },
          { id: 'c', text: 'Is inserted on the medial side of proximal phalanx (thumb).' },
          { id: 'd', text: 'Is innervated by twig from the superficial branch of ulnar nerve.' }
        ],
        correctOptionId: 'a',
        explanation: 'Flexor pollicis brevis arises from the distal border of the flexor retinaculum and the tubercle of the trapezium (superficial head) and inserts into the lateral side of the base of the proximal phalanx of the thumb.'
      },
      {
        id: 'hand-17',
        chapterId: 'hand',
        number: 17,
        text: 'The opponens pollicis; choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Arises from flexor retinaculum and capitate bone.' },
          { id: 'b', text: 'Lies superficial to abductor pollicis brevis.' },
          { id: 'c', text: 'Is innervated by a twig from ulnar nerve.' },
          { id: 'd', text: 'Is inserted into the lateral aspect of the first metacarpal bone.' }
        ],
        correctOptionId: 'd',
        explanation: 'Opponens pollicis lies deep to abductor pollicis brevis, arises from the flexor retinaculum and tubercle of the trapezium, and inserts into the whole length of the lateral half of the palmar surface of the 1st metacarpal shaft.'
      },
      {
        id: 'hand-18',
        chapterId: 'hand',
        number: 18,
        text: 'Palmaris brevis; one is correct:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Arises from trapezium and capitate bone.' },
          { id: 'b', text: 'Is the only muscle innervated by superficial branch of ulnar nerve.' },
          { id: 'c', text: 'Covers the ulnar artery and the superficial branch of median nerve.' },
          { id: 'd', text: 'Covers the palmar cutaneous branch of median nerve.' }
        ],
        correctOptionId: 'b',
        explanation: 'Palmaris brevis is a subcutaneous muscle in the hypothenar region that wrinkles the skin of the medial palm to improve grip; it is the ONLY muscle innervated by the superficial branch of the ulnar nerve.'
      },
      {
        id: 'hand-19',
        chapterId: 'hand',
        number: 19,
        text: 'The lumbrical muscles, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Arise from the tendons of flexor digitorum superficialis.' },
          { id: 'b', text: 'Are inserted into the radial side of extensor expansion.' },
          { id: 'c', text: 'Are innervated by ulnar and radial nerves.' },
          { id: 'd', text: 'In association with the interossei, extend the digits at the metacarpophalangeal joints.' }
        ],
        correctOptionId: 'b',
        explanation: 'The four lumbricals arise from the four tendons of flexor digitorum profundus and insert into the lateral (radial) side of the dorsal digital (extensor) expansions of the medial four fingers, flexing the MCP joints and extending the IP joints.'
      },
      {
        id: 'hand-20',
        chapterId: 'hand',
        number: 20,
        text: 'The mid-palmar space, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'It contains tendon of flexor pollicis longus.' },
          { id: 'b', text: 'It is bounded anteriorly by flexor retinaculum.' },
          { id: 'c', text: 'It contains deep palmar arch.' },
          { id: 'd', text: 'It contains tendons of the long flexors of medial 3 fingers.' }
        ],
        correctOptionId: 'd',
        explanation: 'The mid-palmar space lies posterior to (and is related to) the flexor tendons of the medial three fingers (middle, ring, and little fingers) along with the 2nd, 3rd, and 4th lumbricals.'
      },
      {
        id: 'hand-21',
        chapterId: 'hand',
        number: 21,
        text: 'The space of Parona, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Bounded posteriorly by the pronator quadratus muscle.' },
          { id: 'b', text: 'Continuous distally with the thenar space.' },
          { id: 'c', text: 'Continuous distally with the pulp space.' },
          { id: 'd', text: 'Transmits sepsis to hand.' }
        ],
        correctOptionId: 'a',
        explanation: 'The space of Parona in the distal forearm lies anterior to the pronator quadratus muscle and interosseous membrane (which form its posterior boundary) and deep to the flexor tendons (radial and ulnar bursae).'
      },
      {
        id: 'hand-22',
        chapterId: 'hand',
        number: 22,
        text: 'The pulp space, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Is present on the palmar aspect of the middle phalanx.' },
          { id: 'b', text: 'Divided wide spaces by fibrous septae.' },
          { id: 'c', text: 'Contains the end of the fibrous flexor sheath.' },
          { id: 'd', text: 'Transmits blood vessels for the shaft and head of the phalanx.' }
        ],
        correctOptionId: 'd',
        explanation: 'The pulp space lies over the palmar aspect of the distal phalanx, is divided into tight compartments by radiating fibrous septa, and transmits the nutrient blood vessels to the diaphysis (shaft) of the distal phalanx (explaining why felon/pulp infection can cause avascular necrosis of the distal 4/5 of the phalanx while sparing the base).'
      },
      {
        id: 'hand-23',
        chapterId: 'hand',
        number: 23,
        text: 'Regarding the thumb, choose the correct answer:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'It is supplied by ulnar artery.' },
          { id: 'b', text: 'It is extended by one muscle.' },
          { id: 'c', text: 'It is adducted by two muscles.' },
          { id: 'd', text: 'It is abducted by two muscles.' }
        ],
        correctOptionId: 'd',
        explanation: 'The thumb is abducted by two muscles (abductor pollicis longus and abductor pollicis brevis), flexed by two muscles (FPL and FPB), extended by two muscles (EPL and EPB), and adducted by ONE muscle (adductor pollicis).'
      },
      {
        id: 'hand-24',
        chapterId: 'hand',
        number: 24,
        text: 'The interosseous muscles of the hand are supplied by:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Deep branch of ulnar nerve.' },
          { id: 'b', text: 'Superficial branch of ulnar nerve.' },
          { id: 'c', text: 'Median nerve.' },
          { id: 'd', text: 'Posterior interosseous nerve.' }
        ],
        correctOptionId: 'a',
        explanation: 'All palmar and dorsal interosseous muscles of the hand are innervated by the deep branch of the ulnar nerve.'
      },
      {
        id: 'hand-25',
        chapterId: 'hand',
        number: 25,
        text: "Loss of finger's adduction results from lesion of which of the following nerves?",
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Ulnar nerve.' },
          { id: 'b', text: 'Median nerve.' },
          { id: 'c', text: 'Radial nerve.' },
          { id: 'd', text: 'Musculocutaneous nerve.' }
        ],
        correctOptionId: 'a',
        explanation: 'Finger adduction (PAD = Palmar Interossei Adduct) is performed by the palmar interossei, which are innervated by the deep branch of the ulnar nerve.'
      },
      {
        id: 'hand-26',
        chapterId: 'hand',
        number: 26,
        text: 'Muscles of hypothenar eminence are innervated by:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Median nerve.' },
          { id: 'b', text: 'Ulnar nerve.' },
          { id: 'c', text: 'Median & radial nerves.' },
          { id: 'd', text: 'Median & ulnar nerves.' }
        ],
        correctOptionId: 'b',
        explanation: 'The hypothenar muscles (abductor digiti minimi, flexor digiti minimi brevis, and opponens digiti minimi) are all innervated by the deep branch of the ulnar nerve.'
      },
      {
        id: 'hand-27',
        chapterId: 'hand',
        number: 27,
        text: 'Median nerve supplies all of the following muscles acting on thumb except:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'Opponens pollicis.' },
          { id: 'b', text: 'Flexor pollicis brevis.' },
          { id: 'c', text: 'Abductor pollicis longus.' },
          { id: 'd', text: 'Abductor pollicis brevis.' }
        ],
        correctOptionId: 'c',
        explanation: 'Abductor pollicis longus is a deep muscle of the posterior compartment of the forearm and is supplied by the posterior interosseous nerve (radial nerve), not the median nerve.'
      },
      {
        id: 'hand-28',
        chapterId: 'hand',
        number: 28,
        text: 'The palmar thenar space contains, mark the wrong answer:',
        source: '2022',
        options: [
          { id: 'a', text: 'Flexor pollicis longus tendon.' },
          { id: 'b', text: 'Flexor tendons of the index.' },
          { id: 'c', text: 'The 1st lumbrical muscle.' },
          { id: 'd', text: 'Flexor carpi radialis tendon.' }
        ],
        correctOptionId: 'd',
        explanation: 'The tendon of flexor carpi radialis passes through a separate osteofibrous tunnel in the groove of the trapezium to insert into the base of the 2nd and 3rd metacarpals, and is not a content of the thenar space.'
      },
      {
        id: 'hand-29',
        chapterId: 'hand',
        number: 29,
        text: 'One of the following regarding the movements of thumb, is false:',
        source: '2022',
        options: [
          { id: 'a', text: 'It is flexed by two muscles.' },
          { id: 'b', text: 'It is extended by two muscles.' },
          { id: 'c', text: 'It is adducted by two muscles.' },
          { id: 'd', text: 'It is abducted by two muscles.' }
        ],
        correctOptionId: 'c',
        explanation: 'The thumb is adducted by only ONE muscle (adductor pollicis, which has oblique and transverse heads), whereas flexion, extension, and abduction each have two muscles (longus and brevis).'
      },
      {
        id: 'hand-30',
        chapterId: 'hand',
        number: 30,
        text: 'Regarding the hand, select the true statement:',
        source: '2021',
        options: [
          { id: 'a', text: 'Deep branch of ulnar nerve lies within the concavity of deep palmar arch.' },
          { id: 'b', text: 'Deep palmar arch is level with the distal border of outstretched thumb web.' },
          { id: 'c', text: 'Superficial branch of the ulnar nerve supplies the hypothenar muscles.' },
          { id: 'd', text: 'Flexor digitorum superficialis tendon inserts into the base of distal phalanx.' }
        ],
        correctOptionId: 'a',
        explanation: 'The deep branch of the ulnar nerve accompanies the deep palmar arch, lying within its concavity. Note that the superficial palmar arch (not the deep arch) lies at the level of the distal border of the fully extended thumb (Boeckel\'s line).'
      },
      {
        id: 'hand-31',
        chapterId: 'hand',
        number: 31,
        text: 'Which is correct about lumbrical muscles?',
        source: '2021',
        options: [
          { id: 'a', text: 'Lumbricals are each attached to a tendon of flexor digitorum superficialis.' },
          { id: 'b', text: 'They are all supplied by the median nerve.' },
          { id: 'c', text: 'They produce flexion at the metacarpophalangeal joints of the finger.' },
          { id: 'd', text: 'They produce flexion at the interphalangeal joint.' }
        ],
        correctOptionId: 'c',
        explanation: 'The lumbricals arise from the tendons of flexor digitorum profundus (not superficialis) and insert into the dorsal digital expansions to flex the metacarpophalangeal (MCP) joints and extend the interphalangeal (IP) joints. (Note: the PDF table printed 31-a in error, with a handwritten correction mark on page 92; anatomically c is the true statement).'
      },
      {
        id: 'hand-32',
        chapterId: 'hand',
        number: 32,
        text: 'Regarding synovial sheaths of flexor tendons at the wrist, one is correct:',
        source: 'DEP BOOK',
        options: [
          { id: 'a', text: 'The radial bursa is the synovial sheath surrounding flexor carpi radialis tendon.' },
          { id: 'b', text: 'The radial bursa extends for about 2 finger breadth above the flexor retinaculum.' },
          { id: 'c', text: 'The ulnar bursa is the synovial sheath, which surrounds tendons of flexor digitorum profundus, and superficialis.' },
          { id: 'd', text: 'Tenosynovitis of the ring finger may extend to the radial bursa.' }
        ],
        correctOptionId: 'c',
        explanation: 'The ulnar bursa is the common flexor synovial sheath enclosing the tendons of flexor digitorum superficialis and profundus as they pass through the carpal tunnel, while the radial bursa encloses the tendon of flexor pollicis longus.'
      },
      {
        id: 'hand-33',
        chapterId: 'hand',
        number: 33,
        text: 'The following fact is true of palmar aponeurosis:',
        source: '2025',
        options: [
          { id: 'a', text: 'The base of the aponeurosis divides into five slips' },
          { id: 'b', text: 'Its apex is attached to the flexor retinaculum as the continuation of palmaris longus' },
          { id: 'c', text: 'It is loosely attached to the skin of the palm' },
          { id: 'd', text: 'The deep palmar arterial arch lies immediately under the aponeurosis' }
        ],
        correctOptionId: 'b',
        explanation: 'The apex of the triangular palmar aponeurosis is proximal, attached to the flexor retinaculum, and receives the insertion of the palmaris longus tendon. Its distal base divides into four slips (for the medial four fingers), it is tightly bound to the palmar skin, and the superficial palmar arch lies immediately deep to it.'
      }
    ]
  }
];
