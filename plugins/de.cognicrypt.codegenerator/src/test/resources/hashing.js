scope({c0_Algorithm:16, c0_Digest:13, c0_KeyDerivationAlgorithm:3, c0_insecure:16, c0_name:16, c0_outputSize:13, c0_performance:16, c0_secure:16, c0_status:16});
defaultScope(1);
intRange(-8, 7);
stringLength(18);

c0_Algorithm = Abstract("c0_Algorithm");
c0_name = c0_Algorithm.addChild("c0_name").withCard(1, 1);
c0_performance = c0_Algorithm.addChild("c0_performance").withCard(1, 1);
c0_status = c0_Algorithm.addChild("c0_status").withCard(1, 1).withGroupCard(1, 1);
c0_secure = c0_status.addChild("c0_secure").withCard(0, 1);
c0_insecure = c0_status.addChild("c0_insecure").withCard(0, 1);
c0_Digest = Abstract("c0_Digest");
c0_outputSize = c0_Digest.addChild("c0_outputSize").withCard(1, 1);
c0_KeyDerivationAlgorithm = Abstract("c0_KeyDerivationAlgorithm");
c0_Task = Abstract("c0_Task");
c1_name = c0_Task.addChild("c1_name").withCard(1, 1);
c0_DigestAlgorithms = Clafer("c0_DigestAlgorithms").withCard(1, 1);
c0_md5 = c0_DigestAlgorithms.addChild("c0_md5").withCard(1, 1);
c0_sha_0 = c0_DigestAlgorithms.addChild("c0_sha_0").withCard(1, 1);
c0_sha_1 = c0_DigestAlgorithms.addChild("c0_sha_1").withCard(1, 1);
c0_sha_224 = c0_DigestAlgorithms.addChild("c0_sha_224").withCard(1, 1);
c0_sha_256 = c0_DigestAlgorithms.addChild("c0_sha_256").withCard(1, 1);
c0_sha_384 = c0_DigestAlgorithms.addChild("c0_sha_384").withCard(1, 1);
c0_sha_512 = c0_DigestAlgorithms.addChild("c0_sha_512").withCard(1, 1);
c0_sha_512_224 = c0_DigestAlgorithms.addChild("c0_sha_512_224").withCard(1, 1);
c0_sha_512_256 = c0_DigestAlgorithms.addChild("c0_sha_512_256").withCard(1, 1);
c0_sha3_224 = c0_DigestAlgorithms.addChild("c0_sha3_224").withCard(1, 1);
c0_sha3_256 = c0_DigestAlgorithms.addChild("c0_sha3_256").withCard(1, 1);
c0_sha3_384 = c0_DigestAlgorithms.addChild("c0_sha3_384").withCard(1, 1);
c0_sha3_512 = c0_DigestAlgorithms.addChild("c0_sha3_512").withCard(1, 1);
c0_KeyDerivationAlgorithms = Clafer("c0_KeyDerivationAlgorithms").withCard(1, 1);
c0_pbkdf = c0_KeyDerivationAlgorithms.addChild("c0_pbkdf").withCard(1, 1);
c0_bcrypt = c0_KeyDerivationAlgorithms.addChild("c0_bcrypt").withCard(1, 1);
c0_scrypt = c0_KeyDerivationAlgorithms.addChild("c0_scrypt").withCard(1, 1);
c0_PasswordStoring = Clafer("c0_PasswordStoring").withCard(1, 1);
c0_digestToUse = c0_PasswordStoring.addChild("c0_digestToUse").withCard(0, 1);
c0_kdaToUse = c0_PasswordStoring.addChild("c0_kdaToUse").withCard(0, 1);
c0_name.refToUnique(string);
c0_performance.refToUnique(Int);
c0_Digest.extending(c0_Algorithm);
c0_outputSize.refToUnique(Int);
c0_KeyDerivationAlgorithm.extending(c0_Algorithm);
c1_name.refToUnique(string);
c0_md5.extending(c0_Digest);
c0_md5.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"MD5\"")));
c0_md5.addConstraint(equal(joinRef(join($this(), c0_performance)), constant(4)));
c0_md5.addConstraint(some(join(join($this(), c0_status), c0_insecure)));
c0_md5.addConstraint(equal(joinRef(join($this(), c0_outputSize)), constant(128)));
c0_sha_0.extending(c0_Digest);
c0_sha_0.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"SHA-0\"")));
c0_sha_0.addConstraint(equal(joinRef(join($this(), c0_performance)), constant(4)));
c0_sha_0.addConstraint(some(join(join($this(), c0_status), c0_insecure)));
c0_sha_0.addConstraint(equal(joinRef(join($this(), c0_outputSize)), constant(160)));
c0_sha_1.extending(c0_Digest);
c0_sha_1.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"SHA-1\"")));
c0_sha_1.addConstraint(equal(joinRef(join($this(), c0_performance)), constant(4)));
c0_sha_1.addConstraint(some(join(join($this(), c0_status), c0_insecure)));
c0_sha_1.addConstraint(equal(joinRef(join($this(), c0_outputSize)), constant(160)));
c0_sha_224.extending(c0_Digest);
c0_sha_224.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"SHA-224\"")));
c0_sha_224.addConstraint(equal(joinRef(join($this(), c0_outputSize)), constant(224)));
c0_sha_224.addConstraint(some(join(join($this(), c0_status), c0_secure)));
c0_sha_224.addConstraint(equal(joinRef(join($this(), c0_performance)), constant(2)));
c0_sha_256.extending(c0_Digest);
c0_sha_256.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"SHA-256\"")));
c0_sha_256.addConstraint(equal(joinRef(join($this(), c0_outputSize)), constant(256)));
c0_sha_256.addConstraint(some(join(join($this(), c0_status), c0_secure)));
c0_sha_256.addConstraint(equal(joinRef(join($this(), c0_performance)), constant(2)));
c0_sha_384.extending(c0_Digest);
c0_sha_384.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"SHA-384\"")));
c0_sha_384.addConstraint(some(join(join($this(), c0_status), c0_secure)));
c0_sha_384.addConstraint(equal(joinRef(join($this(), c0_outputSize)), constant(384)));
c0_sha_384.addConstraint(equal(joinRef(join($this(), c0_performance)), constant(3)));
c0_sha_512.extending(c0_Digest);
c0_sha_512.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"SHA-512\"")));
c0_sha_512.addConstraint(some(join(join($this(), c0_status), c0_secure)));
c0_sha_512.addConstraint(equal(joinRef(join($this(), c0_outputSize)), constant(512)));
c0_sha_512.addConstraint(equal(joinRef(join($this(), c0_performance)), constant(3)));
c0_sha_512_224.extending(c0_Digest);
c0_sha_512_224.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"SHA-512/224\"")));
c0_sha_512_224.addConstraint(some(join(join($this(), c0_status), c0_secure)));
c0_sha_512_224.addConstraint(equal(joinRef(join($this(), c0_outputSize)), constant(224)));
c0_sha_512_224.addConstraint(equal(joinRef(join($this(), c0_performance)), constant(3)));
c0_sha_512_256.extending(c0_Digest);
c0_sha_512_256.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"SHA-512/256\"")));
c0_sha_512_256.addConstraint(some(join(join($this(), c0_status), c0_secure)));
c0_sha_512_256.addConstraint(equal(joinRef(join($this(), c0_outputSize)), constant(256)));
c0_sha_512_256.addConstraint(equal(joinRef(join($this(), c0_performance)), constant(154)));
c0_sha3_224.extending(c0_Digest);
c0_sha3_224.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"SHA3-224\"")));
c0_sha3_224.addConstraint(some(join(join($this(), c0_status), c0_secure)));
c0_sha3_224.addConstraint(equal(joinRef(join($this(), c0_outputSize)), constant(224)));
c0_sha3_224.addConstraint(equal(joinRef(join($this(), c0_performance)), constant(3)));
c0_sha3_256.extending(c0_Digest);
c0_sha3_256.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"SHA3-256\"")));
c0_sha3_256.addConstraint(some(join(join($this(), c0_status), c0_secure)));
c0_sha3_256.addConstraint(equal(joinRef(join($this(), c0_outputSize)), constant(256)));
c0_sha3_256.addConstraint(equal(joinRef(join($this(), c0_performance)), constant(3)));
c0_sha3_384.extending(c0_Digest);
c0_sha3_384.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"SHA3-384\"")));
c0_sha3_384.addConstraint(some(join(join($this(), c0_status), c0_secure)));
c0_sha3_384.addConstraint(equal(joinRef(join($this(), c0_outputSize)), constant(384)));
c0_sha3_384.addConstraint(equal(joinRef(join($this(), c0_performance)), constant(2)));
c0_sha3_512.extending(c0_Digest);
c0_sha3_512.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"SHA3-512\"")));
c0_sha3_512.addConstraint(some(join(join($this(), c0_status), c0_secure)));
c0_sha3_512.addConstraint(equal(joinRef(join($this(), c0_outputSize)), constant(512)));
c0_sha3_512.addConstraint(equal(joinRef(join($this(), c0_performance)), constant(1)));
c0_pbkdf.extending(c0_KeyDerivationAlgorithm);
c0_pbkdf.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"PBKDF\"")));
c0_pbkdf.addConstraint(equal(joinRef(join($this(), c0_performance)), constant(2)));
c0_pbkdf.addConstraint(some(join(join($this(), c0_status), c0_secure)));
c0_bcrypt.extending(c0_KeyDerivationAlgorithm);
c0_bcrypt.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"Bcrypt\"")));
c0_bcrypt.addConstraint(equal(joinRef(join($this(), c0_performance)), constant(1)));
c0_bcrypt.addConstraint(some(join(join($this(), c0_status), c0_secure)));
c0_scrypt.extending(c0_KeyDerivationAlgorithm);
c0_scrypt.addConstraint(equal(joinRef(join($this(), c0_name)), constant("\"Scrypt\"")));
c0_scrypt.addConstraint(equal(joinRef(join($this(), c0_performance)), constant(1)));
c0_scrypt.addConstraint(some(join(join($this(), c0_status), c0_secure)));
c0_PasswordStoring.extending(c0_Task);
c0_PasswordStoring.addConstraint(equal(joinRef(join($this(), c1_name)), constant("\"Password Storing\"")));
c0_digestToUse.refToUnique(c0_Digest);
c0_kdaToUse.refToUnique(c0_KeyDerivationAlgorithm);
c0_kdaToUse.addConstraint(implies(equal(joinRef($this()), join(global(c0_KeyDerivationAlgorithms), c0_pbkdf)), some(join(joinParent($this()), c0_digestToUse))));
c0_kdaToUse.addConstraint(implies(notEqual(joinRef($this()), join(global(c0_KeyDerivationAlgorithms), c0_pbkdf)), none(join(joinParent($this()), c0_digestToUse))));
c0_PasswordStoring.addConstraint(or(some(join($this(), c0_kdaToUse)), some(join($this(), c0_digestToUse))));
c0_PasswordStoring.addConstraint(none(join(join(joinRef(join($this(), c0_digestToUse)), c0_status), c0_insecure)));
